const getInfoFromUser = (infoState) => {
  const typeForm = document.querySelectorAll(".balcon_icons_img "),
    width = document.querySelector("#width"),
    height = document.querySelector("#height"),
    option = document.querySelectorAll("select"),
    typeProfile = document.querySelectorAll(".checkbox");

  typeForm.forEach((item, index) => {
    item.addEventListener("click", () => {
      infoState.typeForm = index;
    });
  });

  width.addEventListener("input", () => {
    infoState.width = width.value;
  });

  height.addEventListener("input", () => {
    infoState.height = height.value;
  });

  option.forEach((item) => {
    item.addEventListener("change", () => {
      infoState.optionWindow = item.value;
    });
  });

  typeProfile.forEach((item, index) => {
    item.addEventListener("change", () => {
      index === 0
        ? (infoState.typeProfile = "Холодное")
        : (infoState.typeProfile = "Теплое");
      typeProfile.forEach((box, j) => {
        box.checked = false;
        if (index === j) {
          box.checked = true;
        }
      });
    });
  });
};

export default getInfoFromUser;
