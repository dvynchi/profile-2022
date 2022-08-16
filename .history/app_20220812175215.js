const ham = document.querySelector('#mobile-menu');
const hamLinks = document.querySelector('.navbar_menu');
// const navLogo = document.querySelector('#navbar_logo')

/* display mobile menu using arrow function */
/* toggle the "is-active" class made in css */

const mobileMenu = () => 
{
    ham.classList.toggle('is-active');
    hamLinks.classList.toggle('active');    
};

/* Run hamMenu function upon click */
ham.addEventListener('click', mobileMenu);