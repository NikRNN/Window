const image = () => {
  const section = document.querySelector(".works"),
    imgModal = document.createElement("div"),
    imgBig = document.createElement("img");

  imgModal.classList.add("popup");
  section.appendChild(imgModal);
  imgModal.appendChild(imgBig);

  imgModal.style.alignItems = "center";
  imgModal.style.justifyContent = "center";
  imgModal.style.display = "none";

  section.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      const path = target.parentNode.getAttribute("href");

      imgModal.style.display = "flex";

      imgBig.setAttribute("src", path);
      imgBig.style.display = "block";
    }
    if (target.classList.contains("popup")) {
      imgModal.style.display = "none";
    }
  });
};

export default image;
