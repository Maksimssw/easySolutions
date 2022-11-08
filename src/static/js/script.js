document.addEventListener('DOMContentLoaded', function(){
    const menu = document.querySelector('.navigation__list'),
          hamburger = document.querySelector('.navigation-button');

    // When the function is activated, the menu either opens or closes
    function toggleMenu (){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    }

    // When you click on the hamburger, activation of the functions 
    // "toggleMenu"
    hamburger.addEventListener('click', () => {
        toggleMenu();
    });
});