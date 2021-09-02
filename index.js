/*--------MENU------ */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  let openHideMenu = () => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  };

  $btnMenu.addEventListener("click", (e) => {
    openHideMenu();
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    openHideMenu();
  });
})(document);
