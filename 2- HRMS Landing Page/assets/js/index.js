const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close"); 
const navbarDiv = document.querySelector(".navigation"); 
const heroSectionImage = document.querySelector(".hero-section-image"); 
const heroSectionDiv = document.querySelector(".hero-section-container");
const readmoreButton1 = document.querySelector("#srv-button-1");
const readmoreButton2 = document.querySelector("#srv-button-2");
const readmoreButton3 = document.querySelector("#srv-button-3");
const readmoreButton4 = document.querySelector("#srv-button-4");
const expandedText1 = document.querySelector(".service-description-1");
const expandedText2 = document.querySelector(".service-description-2");
const expandedText3 = document.querySelector(".service-description-3");
const expandedText4 = document.querySelector(".service-description-4");
const card1 = document.querySelector("#service-card-1");
const card2 = document.querySelector("#service-card-2");
const card3 = document.querySelector("#service-card-3");
const card4 = document.querySelector("#service-card-4");

const color_collapse = "#222222";
const color_expand = "#7f28ec";


texts_expand = {
    t1: "Mobile Application development involves creating software applications that run on mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.), implementing backend services such as data access with an API, and testing the application on target devices",
    t2: "Mobile Application development involves creating software applications that run on mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.), implementing backend services such as data access with an API, and testing the application on target devices",
    t3: "Mobile Application development involves creating software applications that run on mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.), implementing backend services such as data access with an API, and testing the application on target devices",
    t4: "Mobile Application development involves creating software applications that run on mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.), implementing backend services such as data access with an API, and testing the application on target devices",
}
texts_collapsed = {
    t1: "We use the latest technologies to deliver high quality custom applications which are to unique requirements",
    t2: "As a business continues to grow, executive teams may need to utilize multiple software solutions to improve their management",
    t3: "Mobile Application development involves creating software applications that run on mobile device.",
    t4: "We combine expert website design, SEO and Conversion Rate Optimization to ensure your site is found."
}

navOpen.addEventListener("click", ()=>{
    navOpen.classList.add("close");
    navOpen.classList.remove("open-navigation");
    navClose.classList.add("open-navigation");
    navbarDiv.classList.add("open-navigation");
    navbarDiv.classList.remove("hide");
});

navClose.addEventListener("click", ()=>{
    navOpen.classList.add("open-navigation");
    navClose.classList.remove("open-navigation");
    navClose.classList.add("open-close");
    navbarDiv.classList.remove("open-navigation");
    navbarDiv.classList.add("hide");
});

readmoreButton1.addEventListener("click", ()=>{
    if(readmoreButton1.innerText == "Read More..."){
        expandedText1.innerText = texts_expand.t1;
        readmoreButton1.innerText = "Show Less";
        card1.style.backgroundColor = color_expand;
    }
    else{
        expandedText1.innerText = texts_collapsed.t1;
        readmoreButton1.innerText = "Read More...";
        card1.style.backgroundColor = color_collapse;
    }
});

readmoreButton2.addEventListener("click", ()=>{
    if(readmoreButton2.innerText == "Read More..."){
        expandedText2.innerText = texts_expand.t2;
        readmoreButton2.innerText = "Show Less";
        card2.style.backgroundColor = color_expand;
    }
    else{
        expandedText2.innerText = texts_collapsed.t2;
        readmoreButton2.innerText = "Read More...";
        card2.style.backgroundColor = color_collapse;
    }
});

readmoreButton3.addEventListener("click", ()=>{
    if(readmoreButton3.innerText == "Read More..."){
        expandedText3.innerText = texts_expand.t3;
        readmoreButton3.innerText = "Show Less";
        card3.style.backgroundColor = color_expand;
    }
    else{
        expandedText3.innerText = texts_collapsed.t3;
        readmoreButton3.innerText = "Read More...";   
        card3.style.backgroundColor = color_collapse;
    }
});

readmoreButton4.addEventListener("click", ()=>{
    if(readmoreButton4.innerText == "Read More..."){
        expandedText4.innerText = texts_expand.t4;
        readmoreButton4.innerText = "Show Less";
        card4.style.backgroundColor = color_expand;
    }
    else{
        expandedText4.innerText = texts_collapsed.t4;
        readmoreButton4.innerText = "Read More...";        
        card4.style.backgroundColor = color_collapse;
    }
});

