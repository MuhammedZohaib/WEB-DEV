const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close"); 
const navbarDiv = document.querySelector(".navigation"); 



navOpen.addEventListener("click", ()=>{
    navOpen.classList.add("close");
    navOpen.classList.remove("open-navigation");
    navClose.classList.add("open-navigation");
    navbarDiv.classList.add("open-navigation");
    navbarDiv.classList.remove("hide");
})

navClose.addEventListener("click", ()=>{
    navOpen.classList.add("open-navigation");
    navClose.classList.remove("open-navigation");
    navClose.classList.add("open-close");
    navbarDiv.classList.remove("open-navigation");
    navbarDiv.classList.add("hide");
})