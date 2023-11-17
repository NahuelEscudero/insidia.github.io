//BURGER BUTTON

const buttonBurger = document.querySelector("#burgerButton");
const navBar = document.querySelector("#navBar");
const cerrarBurger = document.querySelector("#burger-menu__cerrar");

buttonBurger.addEventListener("click", () => {
    navBar.classList.toggle("visible");
});

cerrarBurger.addEventListener("click", () => {
    navBar.classList.remove("visible");
});



//CONTAINER PRODUCTOS

const remeras = [
    {
        id: 1,
        imagen: "../images/productos/remeras/REMERA EFECTO INVERNADERO [ NEVADO ].png",
        nombre: "REMERA EFECTO INVERNADERO [ NEVADO ]",
        precio: "$23000"
    },
    {
        id: 2,
        imagen: "../images/productos/Remeras/REMERA ENERGÍAS RENOVABLES [ NEGRO ].png",
        nombre: "REMERA ENERGÍAS RENOVABLES [ NEGRO ]",
        precio: "$22100"
    },
    {
        id: 3,
        imagen: "../images/productos/Remeras/REMERA SUNWAVES [ LS08 ].png",
        nombre: "REMERA SUNWAVES [ LS08 ]",
        precio: "$17680"
    },
    {
        id: 4,
        imagen: "../images/productos/Remeras/REMERA SUNWAVES [ LS15 ].png",
        nombre: "REMERA SUNWAVES [ LS15 ]",
        precio: "$22100"
    },
    {
        id: 5,
        imagen: "../images/productos/Remeras/REMERON MEGA [ GRIS ].png",
        nombre: "REMERON MEGA [ GRIS ]",
        precio: "$24200"
    },
    {
        id: 6,
        imagen: "../images/productos/Remeras/REMERON MEGA [ NEGRO ].png",
        nombre: "REMERON MEGA [ NEGRO ]", 
        precio: "$24200"
    }
];

const mainCont = document.querySelector("#mainCont");

remeras.forEach((item) => {
    let productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
    <h4 class="product-card__title">${item.nombre}</h4>
    <img src="${item.imagen}" alt="Agregar ${item.nombre} al carrito" class="product-card__img">
    <div class="product-card-add"><p class="product-card-add__precio">${item.precio}</p>
    <button id="addCarrito${item.id}" class="product-card-add__button"><img src="./images/emojis/ADD CARRITO W.png" alt="Agregar al carrito" class="product-card-add__button-img"></button></div>`;

    mainCont.append(productCard)

    const addCarritoButton = document.getElementById(`addCarrito${item.id}`);
    const sumaCarrito = document.querySelector("#sumaCarrito");

    if(addCarritoButton){
        addCarritoButton.addEventListener("click", () => {
            let valorActual = parseInt(sumaCarrito.innerHTML);
            valorActual += 1;
            sumaCarrito.innerHTML = valorActual;
        })
    }
});

