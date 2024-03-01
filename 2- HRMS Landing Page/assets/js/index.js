const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close"); 
const navbarDiv = document.querySelector(".navigation"); 
const heroSectionImage = document.querySelector(".hero-section-image"); 
const imagePath_desktop = "./assets/images/illustrations/rocket_desktop.svg";
const imagePath_mobile= "./assets/images/illustrations/rocket_mobile.svg";



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

window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 768){
        heroSectionImage.setAttribute("src", imagePath_desktop)
    }
    else{
        heroSectionImage.setAttribute("src", imagePath_mobile)
    }
})