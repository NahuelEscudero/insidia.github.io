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
        imagen: "./images/productos/remeras/REMERA EFECTO INVERNADERO [ NEVADO ].png",
        nombre: "REMERA EFECTO INVERNADERO [ NEVADO ]",
        precio: "$23000"
    },
    {
        id: 2,
        imagen: "./images/productos/remeras/REMERA ENERGÍAS RENOVABLES [ NEGRO ].png",
        nombre: "REMERA ENERGÍAS RENOVABLES [ NEGRO ]",
        precio: "$22100"
    },
    {
        id: 3,
        imagen: "./images/productos/remeras/REMERA SUNWAVES [ LS08 ].png",
        nombre: "REMERA SUNWAVES [ LS08 ]",
        precio: "$17680"
    },
    {
        id: 4,
        imagen: "./images/productos/remeras/REMERA SUNWAVES [ LS15 ].png",
        nombre: "REMERA SUNWAVES [ LS15 ]",
        precio: "$22100"
    },
    {
        id: 5,
        imagen: "./images/productos/remeras/REMERON MEGA [ GRIS ].png",
        nombre: "REMERON MEGA [ GRIS ]",
        precio: "$24200"
    },
    {
        id: 6,
        imagen: "./images/productos/remeras/REMERON MEGA [ NEGRO ].png",
        nombre: "REMERON MEGA [ NEGRO ]", 
        precio: "$24200"
    }
];



const mainCont = document.querySelector("#mainCont");


//Titulo del MAIN

const titleMain = document.createElement("h2");
titleMain.innerHTML = "PRODUCTOS"
mainCont.append(titleMain);

//Creacion del carrito en el DOM

const containerCarrito = document.createElement("div");
containerCarrito.classList.add("cont-carrito");
containerCarrito.innerHTML = "Soy un carrito de compras";

mainCont.append(containerCarrito);

//Array inicializado de objetos, que van a ir en el carrito
const carrito = [];

//Recorrido del array "remeras" para crear product cards
remeras.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <h4 class="product-card__title">${item.nombre}</h4>
        <img src="${item.imagen}" alt="Agregar ${item.nombre} al carrito" class="product-card__img">
        <div class="product-card-add">
            <p class="product-card-add__precio">${item.precio}</p>
            <button id="addCarrito${item.id}"                            class="product-card-add__button">
            <img src="./images/emojis/ADD CARRITO W.png" alt="Agregar al carrito" class="product-card-add__button-img-white">
            <img src="./images/emojis/ADD CARRITO B.png" alt="Agregar al carrito" class="product-card-add__button-img-black">
            </button>
        </div>
    `
    mainCont.append(productCard);
});


const verCarrito = document.querySelector("#carritoButton");
const sumaCarrito = document.querySelector("#sumaCarrito");



const prodAgregado = (prod) => {
    return {
        id: prod.id,
        nombre: prod.nombre,
        imagen: prod.imagen,
        precio: prod.precio
    }
}

// Funcion que agrega productos al carrito
const agregarAlCarrito = (producto) => {
    const addCarritoButton = document.querySelector(`#addCarrito${producto.id}`);

    carrito.push(producto);

    if(addCarritoButton.addEventListener("click", agregarAlCarrito(prodAgregado(producto)))){
        const productCardCarrito = document.createElement("div");
        productCardCarrito.classList.add("product-card-carrito");
        productCardCarrito.innerHTML = `

        `
    }
}









// remeras.forEach((item) => {
//     let productCard = document.createElement("div");

//     productCard.classList.add("product-card");
//     productCard.innerHTML = `
//         <h4 class="product-card__title">${item.nombre}</h4>
//         <img src="${item.imagen}" alt="Agregar ${item.nombre} al carrito" class="product-card__img">
//         <div class="product-card-add"><p class="product-card-add__precio">${item.precio}</p>
//         <button id="addCarrito${item.id}" class="product-card-add__button"><img src="./images/emojis/ADD CARRITO W.png" alt="Agregar al carrito" class="product-card-add__button-img-white"><img src="./images/emojis/ADD CARRITO B.png" alt="Agregar al carrito" class="product-card-add__button-img-black"></button></div>`;

//     mainCont.append(productCard);

//     const addCarritoButton = document.getElementById(`addCarrito${item.id}`);
//     let valorActual = parseInt(sumaCarrito.innerHTML);
//     const logValorActual = () => {
//         if(verCarrito){
//             verCarrito.addEventListener("click", () => {
//                 if(valorActual > 0){
//                     alert("Hay productos en el carrito :)");
//                 }else{
//                     alert("No hay productos en el carrito :(");
//                 }
//             });
//         }
//         console.log(valorActual);
//     }


//     if (addCarritoButton) {

//         addCarritoButton.addEventListener("click", () => {
//             valorActual += 1;
//             sumaCarrito.innerHTML = valorActual;
//             logValorActual();
//         });
//         logValorActual();
//     }

    
    

// });

