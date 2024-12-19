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
            <div class="pro-btn">
            <button class="addCart" data-id="${product.id}"><i class="fa-duotone fa-solid fa-cart-shopping"></i></button>
            <button class="wishList" data-id="${product.id}"><i class="fa-duotone fa-solid fa-heart"></i></button>
             </div>           
        </div>`;
        listProduct.appendChild(newProduct);
})

}
initApp();

let iconCart = document.querySelector('.menu-cart');
let iconWish = document.querySelector('.menu-wish');
let iconCartlist = document.querySelector('.cart-list');
let iconWishlist = document.querySelector('.wish-list');
let iconCartSpan = iconCart.querySelector('.cart-count');
let cartTotal = document.querySelector('.cart-amount-total');
let cartTotalQuantity = document.querySelector('.cart-total-quantity');
let checkOutCart = document.querySelector('.checkout');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let closeWish = document.querySelector('.wishclose');
let cart = [];
let wish = [];

// open and close tab cart
iconCart.addEventListener('click', () => {
    body.classList.add('activeTabCart');
})
closeCart.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
})
checkOutCart.addEventListener('click', () =>{
    console.log(localStorage.getItem('isUsername'));
   if(localStorage.getItem('isUsername') === null){
    alert("Login to checkout");
    body.classList.remove('activeTabCart');
    window.location.href = "/login.html";
   }else{
    body.classList.remove('activeTabCart');
    alert("Thank You for shopping with us.");
    iconCartlist.innerHTML='';
    iconCartSpan.innerText = 0;
    cartTotalQuantity.innerText = 0;
    cartTotal.innerHTML=`Rs. 0`;
    localStorage.removeItem('isUsername');
   }
    
})
// open and close tab wish

iconWish.addEventListener('click', () => {
    body.classList.add('activeTabWish');
})
closeWish.addEventListener('click', () => {
    body.classList.remove('activeTabWish');
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

const setProductInWish = (idProduct, value) => {
    let positionThisProductInWish = wish.findIndex((value) => value.product_id == idProduct);
    if(value <= 0){
        wish.splice(positionThisProductInWish, 1);
    }else if(positionThisProductInWish < 0){
        wish.push({
            product_id: idProduct,
            quantity: 1
        });
    }else{
        wish[positionThisProductInWish].quantity = value;
    }
    localStorage.setItem('wish', JSON.stringify(wish));
    addWishToHTML();
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
    cartTotalQuantity.innerText = totalQuantity;
    cartTotal.innerHTML=`Rs. ${totalPrice}`
}

const addWishToHTML = () => {
    iconWishlist.innerHTML = '';
    if(wish.length > 0){
        wish.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            iconWishlist.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.bookname}
                </div>
                <div class="name">
                ${info.authorname}
                </div>
                <div class="quantity">
                    <span class="trash" data-id="${info.id}">remove</span>
                </div>
            `;
            
        })
    }
}



document.addEventListener('click', (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let quantity = null;
    let positionProductInCart = cart.findIndex((value) => value.product_id == idProduct);
    console.log(positionProductInCart);
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

document.addEventListener('click', (event2) => {
    let buttonClick = event2.target;
    let idProduct = buttonClick.dataset.id;
    let quantity = null;
    let positionProductInWish = wish.findIndex((value) => value.product_id == idProduct);
    console.log(positionProductInWish);
    switch (true) {
        case (buttonClick.classList.contains('wishList')):
            quantity = (positionProductInWish < 0) ? 1 : wish[positionProductInWish].quantity+1;
            setProductInWish(idProduct, quantity);
            break;
            case (buttonClick.classList.contains('trash')):
                quantity = wish[positionProductInWish].quantity-1;
                setProductInWish(idProduct, quantity);
                break;
        default:
            break;
    }

})




