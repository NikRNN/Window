const getInfoFromUser = (infoState) => {
  const typeForm = document.querySelectorAll(".balcon_icons_img "),
    width = document.querySelector("#width"),
    height = document.querySelector("#height"),
    option = document.querySelectorAll("select"),
    typeProfile = document.querySelectorAll(".checkbox"),
    checkBoxes = document.querySelectorAll(".checkbox-custom"),
    btn_profile = document.querySelector(".popup_calc_button"),
    btn_profile2 = document.querySelector(".popup_calc_profile_button");

  btn_profile.classList.add("disabled_btn");
  btn_profile.setAttribute("disabled", "true");
  btn_profile2.classList.add("disabled_btn");
  btn_profile2.setAttribute("disabled", "true");

  function startInitForm() {
    width.classList.add("border_form_info");
    height.classList.add("border_form_info");
    option.forEach((item) => item.classList.add("border_form_info"));
    checkBoxes.forEach((item) => item.classList.add("border_form_info"));
  }

  startInitForm();

  function checkInputsFirstForm(infoState) {
    if (
      "typeForm" in infoState &&
      "width" in infoState &&
      infoState["width"] !== " " &&
      "height" in infoState &&
      infoState["height"] !== " "
    ) {
      btn_profile.classList.remove("disabled_btn");
      btn_profile.removeAttribute("disabled");
    }
  }

  typeForm.forEach((item, index) => {
    item.addEventListener("click", () => {
      infoState.typeForm = index;
      checkInputsFirstForm(infoState);
    });
  });

  width.addEventListener("input", () => {
    width.classList.remove("border_form_info");
    infoState.width = width.value;
    checkInputsFirstForm(infoState);
  });

  height.addEventListener("input", () => {
    height.classList.remove("border_form_info");
    infoState.height = height.value;
    checkInputsFirstForm(infoState);
  });

  option.forEach((item) => {
    item.addEventListener("change", () => {
      infoState.optionWindow = item.value;
      checkInputsSecondForm(infoState);
    });
  });

  typeProfile.forEach((item, index) => {
    item.addEventListener("change", () => {
      checkBoxes.forEach((item) => item.classList.remove("border_form_info"));
      index === 0
        ? (infoState.typeProfile = "Холодное")
        : (infoState.typeProfile = "Теплое");
      checkInputsSecondForm(infoState);
      typeProfile.forEach((box, j) => {
        box.checked = false;
        if (index === j) {
          box.checked = true;
        }
      });
    });
  });

  function checkInputsSecondForm(infoState) {
    if ("optionWindow" in infoState && "typeProfile" in infoState) {
      btn_profile2.classList.remove("disabled_btn");
      btn_profile2.removeAttribute("disabled");
    }
  }
};

export default getInfoFromUser;
