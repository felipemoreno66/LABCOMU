// Variables que almacenan referencias a elementos HTML
let allContainerCart = document.querySelector('.products'); // Contenedor de productos disponibles
let containerBuyCart = document.querySelector('.card-items'); // Contenedor del carrito de compras
let priceTotal = document.querySelector('.price-total'); // Elemento que muestra el precio total
let amountProduct = document.querySelector('.count-product'); // Elemento que muestra la cantidad de productos

// Arreglo que almacena los productos en el carrito
let buyThings = [];

// Variables para el precio total y la cantidad de productos en el carrito
let totalCard = 0;
let countProduct = 0;

// Función para configurar los eventos
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct); // Escucha clics en productos disponibles
    containerBuyCart.addEventListener('click', deleteProduct); // Escucha clics en productos del carrito
}

// Función para agregar un producto al carrito
function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

// Función para eliminar un producto del carrito
function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        // Recorre los productos en el carrito y actualiza el precio total
        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });

        // Filtra el producto a eliminar y actualiza la cantidad de productos en el carrito
        buyThings = buyThings.filter(product => product.id !== deleteId);
        countProduct--;
    }

    // Si no quedan productos en el carrito, se actualizan los elementos a cero
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    
    // Actualiza la interfaz del carrito
    loadHtml();
}

// Función para procesar la información de un producto seleccionado
function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    // Actualiza el precio total y gestiona la cantidad de productos en el carrito
    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    
    // Actualiza la interfaz del carrito
    loadHtml();
}

// Función para actualizar la interfaz del carrito
function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}

// Función para limpiar el contenido del carrito
function clearHtml(){
    containerBuyCart.innerHTML = '';
}

document.getElementById("realizarPago").addEventListener("click", function() {
    // Valor que deseas mostrar en la ventana emergente
    var estilosVentana = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        text-align: center;
        padding: 20px;
    }
    #mensaje {
        font-size: 24px;
        color: #000; /* Cambiar el color a negro (#000) */
        font-weight: bold; /* Hacer el texto negrilla */
    }
`;
    // Construye el mensaje
    var mensaje = "El valor a pagar es: " + totalCard;

    // Abre la ventana emergente con el mensaje
    window.open('', 'VentanaEmergente', 'width=400,height=200');
    var ventanaEmergente = window.open('', 'VentanaEmergente', 'width=400,height=200');
    ventanaEmergente.document.write('<html><head><title>Mensaje Emergente</title><style>' + estilosVentana + '</style></head><body><div id="mensaje">' + mensaje + '</div></body></html>');
    ventanaEmergente.document.close();
});
