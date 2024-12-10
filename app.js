
import products from "./products.js";
    const initApp = () => {
        let productId = new URLSearchParams(window.location.search).get('id');
        let thisProduct = products.filter(value => value.id == productId)[0];
        console.log(thisProduct);
        if(!thisProduct){
            window.location.href='/';
        }
        let bookdetails = document.querySelector('.bookdetails');
        bookdetails.querySelector('.single-pro-image img').src = thisProduct.image;
        bookdetails.querySelector('.single-prodetails h3').innerText = thisProduct.bookname;
        bookdetails.querySelector('.single-prodetails h6').innerText = thisProduct.authorname;
        bookdetails.querySelector('.single-prodetails p').innerText = thisProduct.desc;
        bookdetails.querySelector('.single-prodetails h4').innerText ='Rs.' + thisProduct.price;
        bookdetails.querySelector('.addCart').dataset.id = productId;
    }

    initApp();