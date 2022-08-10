function toggleMenu(){
    //variable declaration
    let menu = document.querySelector("#header-nav .menu-links");

    //toggle on and off show-mobile-menu
    // if show-mobile-menu exists remove it , if it doesn't exist add it
    menu.classList.toggle("show-mobile-menu");

}
