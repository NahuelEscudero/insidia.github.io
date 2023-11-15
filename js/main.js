const buttonBurger = document.querySelector("#burgerButton");
const navBar = document.querySelector("#navBar");
const cerrarBurger = document.querySelector("#burger-menu__cerrar");

buttonBurger.addEventListener("click", () => {
    navBar.classList.add("visible");
});

cerrarBurger.addEventListener("click", () => {
    navBar.classList.remove("visible");
});