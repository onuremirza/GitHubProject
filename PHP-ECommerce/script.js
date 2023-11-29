const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
var clientHeight = document.querySelector('.background').clientHeight;

const header = document.querySelector('header');

window.addEventListener("scroll",()=>{
    if (window.scrollY>clientHeight-5) {
        header.classList.add("change")
    }else{header.classList.remove("change")}
})

registerLink.addEventListener('click',()=>{
    logregBox.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    logregBox.classList.remove('active');
});