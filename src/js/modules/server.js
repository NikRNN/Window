const server = (state) => {
  const formEnd = document.querySelector(".popup_calc_end");

  function closeFormEnd(elem) {
    elem.style.display = "none";
    document.body.style.marginRight = `0px`;
    document.body.style.overflow = "";
  }

  const messages = {
    loading: "Идет отправка Ваших данных...",
    success: "Спасибо, скоро мы свяжемся с Вами",
    failure: "Ошибка, попробуйте позже",
  };

  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    phoneInputs = document.querySelectorAll('[name="user_phone"]');

  const postDataToServer = async (url, data) => {
    document.querySelector(".status").textContent = messages.loading;

    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  function clearInputs() {
    inputs.forEach((item) => (item.value = ""));
  }

  function checkPhone() {
    phoneInputs.forEach((item) => {
      item.addEventListener("input", () => {
        item.value = item.value.replace(/\D/, "");
      });
    });
  }
  checkPhone();

  forms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusPostToServer = document.createElement("div");
      statusPostToServer.classList.add("status");
      item.appendChild(statusPostToServer);

      const formData = new FormData(item);
      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postDataToServer("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusPostToServer.textContent = messages.success;
        })
        .catch(() => {
          statusPostToServer.textContent = messages.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusPostToServer.remove();
            closeFormEnd(formEnd);
          }, 2000);
        });
    });
  });
};

export default server;
