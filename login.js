
const signUpBtnLink=document.getElementById("signUpBtn-link");
const signInBtnLink=document.getElementById("signInBtn-link");
const wrapper=document.getElementById("wrapper");
signUpBtnLink.addEventListener('click',()=>{
wrapper.classList.toggle('active');
console.log("inside script");
});

signInBtnLink.addEventListener('click',()=>{
    console.log("outside script");
    wrapper.classList.toggle('active');
    }); 
document.addEventListener('submit',(event) =>{
    console.log("inside login");
    event.preventDefault();
        var userName = document.getElementById("username").value;
        localStorage.setItem('isUsername', userName);
        window.location.href = "/books.html";

})    