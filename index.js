const menuBtn = document.getElementById("menuBtn");

const sideMenu = document.getElementById("sideMenu");

const overlay = document.getElementById("overlay");

const closeBtn = document.getElementById("closeBtn");

const links = document.querySelectorAll(".side-menu a");


// OPEN MENU

function openMenu(){

    sideMenu.classList.add("active");

    overlay.classList.add("active");

    menuBtn.classList.add("active");

    document.body.style.overflow="hidden";

}


// CLOSE MENU

function closeMenu(){

    sideMenu.classList.remove("active");

    overlay.classList.remove("active");

    menuBtn.classList.remove("active");

    document.body.style.overflow="auto";

}


// Toggle

menuBtn.addEventListener("click",function(){

    if(sideMenu.classList.contains("active")){

        closeMenu();

    }else{

        openMenu();

    }

});


// Close Button

closeBtn.addEventListener("click",closeMenu);


// Overlay

overlay.addEventListener("click",closeMenu);


// Links

links.forEach(function(link){

    link.addEventListener("click",closeMenu);

});


// ESC Key

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeMenu();

    }

});