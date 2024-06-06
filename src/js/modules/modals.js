const modals = () => {
  function bindShowModal(selector, modalSelector, closeSelector) {
    const selectors = document.querySelectorAll(selector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    let scrollWidth = calcScrollY();

    selectors.forEach((item) =>
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scrollWidth}px`;
      })
    );

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
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
};

export default modals;
