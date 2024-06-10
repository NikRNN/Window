const modals = () => {
  let scrollWidth = calcScrollY();

  function bindShowModal(
    selector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const selectors = document.querySelectorAll(selector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    selectors.forEach((item) =>
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scrollWidth}px`;
      })
    );

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.display = "none";
        document.body.style.marginRight = `0px`;
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  bindShowModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindShowModal(".phone_link", ".popup", ".popup .popup_close");
  bindShowModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindShowModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindShowModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  function calcScrollY() {
    let elem = document.createElement("div");

    elem.style.width = "50px";
    elem.style.height = "50px";
    elem.style.overflowY = "scroll";

    document.body.appendChild(elem);
    let scr = elem.offsetWidth - elem.clientWidth;

    elem.remove();

    return scr;
  }

  function showModalByTime(selector, ms) {
    let elem = document.querySelector(selector);
    setTimeout(() => {
      elem.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollWidth}px`;
    }, ms);
  }

  showModalByTime(".popup", 3000000);
};

export default modals;
