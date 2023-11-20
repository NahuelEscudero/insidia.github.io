
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

// Funcion que devuelve un objeto con los datos del producto que se le pasa como argumento
const prodAgregado = (producto) => {
    return {
        id: producto.id,
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio
    };
}

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

//MAIN
const mainCont = document.querySelector("#mainCont");
const containerProducts = document.querySelector("#containerProducts");

//Llamo al boton para visualizar el carrito en el MAIN y al numero que me va a indicar que tengo productos agregados al carrito
const verCarrito = document.querySelector("#carritoButton");
const sumaCarrito = document.querySelector("#sumaCarrito");

//Creacion del contenedor del carrito en el DOM
const containerCarrito = document.createElement("div");
containerCarrito.id = "contCarrito";
containerCarrito.classList.add("cont-carrito");

verCarrito.addEventListener("click", () => {
    containerCarrito.classList.toggle("visible");
});

// Selecciono al primer hijo de MAIN para ubicar el contenedor del carrito delante de todos los elementos
const primerHijoMain = mainCont.firstChild;
mainCont.insertBefore(containerCarrito, primerHijoMain);

//Titulo del MAIN
const titleMain = document.createElement("h2");
titleMain.innerHTML = "PRODUCTOS"
mainCont.insertBefore(titleMain, containerCarrito);

//Array de productos que van a ir en el carrito
const carrito = [];

// Funcion que agrega productos al carrito
const agregarAlCarrito = producto => {
    carrito.push(producto);
}

// Funcion que agrega productos al DOM
const agregarProductoAlDOM = producto => {
    const addCarritoButton = document.querySelector(`#addCarrito${producto.id}`);

    if(addCarritoButton){
        addCarritoButton.addEventListener("click", () => {
            agregarAlCarrito(prodAgregado(producto));

            let precioProd = producto.precio;
            const productCardCarrito = document.createElement("div");

            productCardCarrito.classList.add("product-card-carrito");
            productCardCarrito.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-card-carrito__img">
                <h4 class="product-card-carrito__name">${producto.nombre}</h4>
                <div class="product-card-carrito__cant">
                    <small class="product-card-carrito__cant-title">Cant:</small>
                    <button id="restarProducto${producto.id}" class="product-card-carrito__cant-menos"><img src="./images/emojis/MENOS.png" alt="Descontar producto del carrito" class="product-card-carrito__cant-menos-img"></button>
                    <p id="cantSeleccionada" class="product-card-carrito__cant-number">0</p>
                    <button id="sumarProducto${producto.id}" class="product-card-carrito__cant-mas"><img src="./images/emojis/MAS.png" alt="Agregar producto al carrito" class="product-card-carrito__cant-mas-img"></button>
                </div>
                <div class="product-card-carrito__total">
                    <small class="product-card-carrito__total-title">Total:</small>
                    <p id="precioTotalSeleccionado" class="product-card-carrito__number"><b>${precioProd}</b></p>
                </div>
                <div class="product-card-carrito__delete">
                    <button id="eliminarProdCarrito" class="product-card-carrito__delete-button">
                        <img src="./images/emojis/ELIMINAR.png" alt="Eliminar del carrito" class="product-card-carrito__delete-button-img">
                    </button>
                </div>
            `

            containerCarrito.append(productCardCarrito);
            
        });
    }
    sumarNumCarrito(producto);
    // sumarProdCarrito(producto);
}

//Funcion que suma productos dentro del carrito

const sumarProdCarrito = producto => {
    const numCantCarrito = document.querySelector("#cantSeleccionada");
    const sumarProdCarritoButton = document.querySelector(`#sumarProducto${producto.id}`);
    let valorActualSeleccionado = parseInt(numCantCarrito.innerHTML);

    
    if (sumarProdCarritoButton) {
        sumarProdCarritoButton.addEventListener("click", () => {
            valorActualSeleccionado += 1;
            
            numCantCarrito.innerHTML = valorActualSeleccionado;
        });
    }
}

//Funcion que resta productos dentro del carrito


//Funcion que calcula el precio del producto en relacion a la cantidad de productos seleccionados
const precioTotalProd = (precio, multip) => {
    return precio * multip;
}

// Funcion que suma un numero al numerito del carrito por click hecho en el boton add-carrito de cada product card
let valorActual = parseInt(sumaCarrito.innerHTML);
const sumarNumCarrito = producto => {
    const addCarritoButton = document.querySelector(`#addCarrito${producto.id}`);

    if (addCarritoButton) {
        addCarritoButton.addEventListener("click", () => {
            valorActual += 1;
            sumaCarrito.innerHTML = valorActual;
        });
    }
}

//Recorrido del array "remeras" para crear product cards
remeras.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <h4 class="product-card__title">${item.nombre}</h4>
        <img src="${item.imagen}" alt="Agregar ${item.nombre} al carrito" class="product-card__img">
        <div class="product-card-add">
            <p class="product-card-add__precio">${item.precio}</p>
            <button id="addCarrito${item.id}" class="product-card-add__button">
            <img src="./images/emojis/ADD CARRITO W.png" alt="Agregar al carrito" class="product-card-add__button-img-white">
            <img src="./images/emojis/ADD CARRITO B.png" alt="Agregar al carrito" class="product-card-add__button-img-black">
            </button>
        </div>
    `

    containerProducts.append(productCard);
    agregarProductoAlDOM(item);
});