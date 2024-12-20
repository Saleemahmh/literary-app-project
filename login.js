
const signUpBtnLink=document.getElementById("signUpBtn-link");
const signInBtnLink=document.getElementById("signInBtn-link");
const wrapper=document.getElementById("wrapper");
const signInSubmit = document.getElementById("signInsubmit");
const signUpSubmit = document.getElementById("signUpsubmit");
signUpBtnLink.addEventListener('click',()=>{
wrapper.classList.toggle('active');
console.log("inside script");
});

signInBtnLink.addEventListener('click',()=>{
    console.log("outside script");
    wrapper.classList.toggle('active');
    }); 
signInSubmit.addEventListener('click',(event) =>{
console.log("inside login");
event.preventDefault();
        var userName = document.getElementById("username").value;
        sessionStorage.setItem('isUsername', userName);
        window.location.href = "/books.html";

})    
signUpSubmit.addEventListener('click',(event) =>{
    console.log("inside signup");
    event.preventDefault();
            var userNameRegister = document.getElementById("usernamesignup").value;
            var emailId = document.getElementById("email_id").value;
            localStorage.setItem('isUsernameRegister', userNameRegister);
            localStorage.setItem('isEmailRegister', emailId);
            window.location.href = "/success.html";
    
    })   