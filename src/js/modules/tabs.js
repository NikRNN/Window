const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabsSelector),
    content = document.querySelectorAll(contentSelector);

  function hideContent() {
    content.forEach((item) => {
      item.style.display = "none";
      //   item.classList.remove("fadeIn");
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showContent(i = 0) {
    content[i].style.display = "block";
    // content[i].classList.add("fadeIn");
    tabs[i].classList.add(activeClass);
  }

  hideContent();
  showContent();

  header.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target.classList.contains(tabsSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))
    ) {
      tabs.forEach((item, index) => {
        if (target && (target === item || target.parentNode === item)) {
          hideContent();
          showContent(index);
        }
      });
    }
  });
};

export default tabs;
