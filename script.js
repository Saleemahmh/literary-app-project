import products from "./products.js";
const initApp = () => {
    //load list of products
let listProduct = document.querySelector('.product1');
listProduct.innerHTML = null;
products.forEach(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('pro-container');
    newProduct.innerHTML = `
    <div id="book1" class="pro" >
            <img src="${product.image}" alt="" width="300" height="350" onclick="window.location.href='bookDetails.html?id=${product.id}';">
            <div class="des">
                <span>${product.authorname}</span>
                <h5>${product.bookname}</h5>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h4>Rs. ${product.price}</h4>
            </div>
            <button class="addCart" data-id="${product.id}">Add to cart</button>
            <a href="wishlist.html" id="1" style="left:250px;"><i class="fa-duotone fa-solid fa-heart" ></i></a>
        </div>`;
        listProduct.appendChild(newProduct);
})

}
initApp();

let iconCart = document.querySelector('.menu-cart');
let iconCartlist = document.querySelector('.cart-list');
let iconCartSpan = iconCart.querySelector('.cart-count');
let cartTotal = document.querySelector('.cart-amount-total');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let cart = [];

// open and close tab
iconCart.addEventListener('click', () => {
    body.classList.add('activeTabCart');
})
closeCart.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
})

const setProductInCart = (idProduct, value) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == idProduct);
    if(value <= 0){
        cart.splice(positionThisProductInCart, 1);
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: idProduct,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = value;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    addCartToHTML();
}

const addCartToHTML = () => {
    iconCartlist.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice= 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            iconCartlist.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.bookname}
                </div>
                <div class="totalPrice">Rs. ${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus" data-id="${info.id}">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus" data-id="${info.id}">+</span>
                </div>
            `;
            totalPrice = totalPrice + (info.price * item.quantity);
            
        })
    }

    iconCartSpan.innerText = totalQuantity;
    cartTotal.innerHTML=`Rs. ${totalPrice}`
}

document.addEventListener('click', (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let quantity = null;
    let positionProductInCart = cart.findIndex((value) => value.product_id == idProduct);
    switch (true) {
        case (buttonClick.classList.contains('addCart')):
            quantity = (positionProductInCart < 0) ? 1 : cart[positionProductInCart].quantity+1;
            setProductInCart(idProduct, quantity);
            break;
        case (buttonClick.classList.contains('minus')):
            quantity = cart[positionProductInCart].quantity-1;
            setProductInCart(idProduct, quantity);
            break;
        case (buttonClick.classList.contains('plus')):
            quantity = cart[positionProductInCart].quantity+1;
            setProductInCart(idProduct, quantity);
            break;
        default:
            break;
    }
})








