const image = () => {
  let calcWidth = calcScrollY();

  const section = document.querySelector(".works"),
    imgModal = document.createElement("div"),
    imgBig = document.createElement("img");

  imgModal.classList.add("popup");
  section.append(imgModal);
  imgModal.append(imgBig);

  imgModal.style.display = "none";
  imgModal.style.alignItems = "center";
  imgModal.style.justifyContent = "center";

  section.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;

    if (target && target.classList.contains("preview")) {
      const path = target.parentNode.getAttribute("href");
      imgModal.style.display = "flex";
      imgBig.style.maxWidth = "90%";
      imgBig.style.maxHeight = "90%";
      document.body.style.overflow = "hidden";
      imgBig.src = path;
      document.body.style.marginRight = `${calcWidth}px`;
    }

    if (target && target.classList.contains("popup")) {
      imgModal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });

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

export default image;
