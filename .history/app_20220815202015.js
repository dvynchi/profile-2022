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




var navbar = document.querySelector(".navbar")
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky"):
    navbar.classList
}



/************************************* unnecessary ************************************************************************** */


/* Show active menu when scrolling - Auto switch navbar when scrolling */

// const highlightMenu = () => 
// {
//     const elem = document.querySelector('.highlight')
//     const homeMenu = document.querySelector('#about-page')
//     const aboutMenu = document.querySelector('#projects-page')
//     const contactMenu = document.querySelector('#contact-page')

//     let scrollPos = window.scrollY

//       //   Add highlights class to menu items [desktop view only i.e 960px]
//       //   Every 600px while scrolling, the tabs auto switch to the corresponding page
//     if (window.innerWidth > 960 && scrollPos < 600) 
//     {
//         homeMenu.classList.add('highlight')
//         aboutMenu.classList.remove('highlight')
//         return; 
//     }
//     else if (window.innerWidth > 960 && scrollPos < 1400) 
//     {
//         aboutMenu.classList.add('highlight')
//         homeMenu.classList.remove('highlight')
//         contactMenu.classList.remove('highlight')
//         return;
//     }
//     else if (window.innerWidth > 960 && scrollPos < 2345) 
//     {
//         contactMenu.classList.add('highlight')
//         aboutMenu.classList.remove('highlight')
//         return;
//     }

//     if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) 
//     {
//         elem.classList.remove('highlight')
//     }
      
// }

// // call highlightMenu
// window.addEventListener('scroll', highlightMenu);
// window.addEventListener('click', highlightMenu);