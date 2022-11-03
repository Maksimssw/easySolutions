function hamburger(){
    const menu = document.querySelector('.menu').cloneNode(1),
          hamburger = document.querySelector('.hamburger'),
          columnMenu = document.querySelector('.column-menu');

    // Adding a menu to a column
    columnMenu.appendChild(menu);

    // When the function is activated, the menu either opens or closes
    function toggleMenu (){
        hamburger.classList.toggle('active');
        columnMenu.classList.toggle('active');
    }

    // When you click on the hamburger, activation of the functions 
    // "toggleMenu"
    hamburger.addEventListener('click', () => {
        toggleMenu();
    });
}

export default hamburger;