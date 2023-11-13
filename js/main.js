const buttonBurger = document.querySelector("#burgerButton");
const navBar = document.querySelector("#navBar");

buttonBurger.addEventListener("click", () => {
    navBar.classList.toggle("visible");
});