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
const contactForm = document.querySelector(".contant-form");


const arrowImage = document.createElement("img");

const imagePath = "../images/icons/arrow-right.png";
arrowImage.setAttribute("src", imagePath);

const color_collapse = "#222222";
const color_expand = "#7f28ec";
const showLess = "Show Less";
const readMore = "Read More"


texts_expand = {
    t1: "Our custom HR solutions are designed to meet the unique requirements of your organization. Whether you need assistance with payroll management, employee benefits, or performance evaluations, our team of experts is here to help streamline your HR processes and drive efficiency.",
    t2: "Our HR software integration services allow you to seamlessly connect various HR tools and systems, ensuring smooth data flow and enhanced functionality. From syncing employee data across platforms to automating workflows, we help optimize your HR operations for maximum efficiency.",
    t3: "Our HR mobile app empowers employees to access essential HR services anytime, anywhere. From submitting time-off requests to viewing pay stubs and accessing company policies, our user-friendly app makes it easy for your workforce to stay connected and engaged.",
    t4: "Our employee web portal serves as a centralized hub for all your workforce needs. From accessing training materials and performance evaluations to updating personal information and communicating with colleagues, our intuitive portal enhances employee engagement and productivity.",
}
texts_collapsed = {
    t1: "Discover tailored solutions for optimizing your human resources management.",
    t2: "Explore seamless integration solutions to unify your HR software ecosystem.",
    t3: "Access essential HR services anytime, anywhere with our intuitive mobile application.",
    t4: "Experience a centralized hub for accessing critical employee resources and information."
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
    if(readmoreButton1.innerText == readMore){
        expandedText1.innerText = texts_expand.t1;
        readmoreButton1.innerText = showLess;
        arrowImage.classList.add("arrow-left");
        arrowImage.classList.remove("arrow-right");
        readmoreButton1.append(arrowImage);
        card1.style.backgroundColor = color_expand;
    }
    else{
        expandedText1.innerText = texts_collapsed.t1;
        readmoreButton1.innerText = readMore;
        arrowImage.classList.remove("arrow-left");
        arrowImage.classList.add("arrow-right");
        readmoreButton1.append(arrowImage);
        card1.style.backgroundColor = color_collapse;
    }
});

readmoreButton2.addEventListener("click", ()=>{
    if(readmoreButton2.innerText == readMore){
        expandedText2.innerText = texts_expand.t2;
        readmoreButton2.innerText = showLess;
        arrowImage.classList.add("arrow-left");
        arrowImage.classList.remove("arrow-right");
        readmoreButton2.append(arrowImage);
        card2.style.backgroundColor = color_expand;
    }
    else{
        expandedText2.innerText = texts_collapsed.t2;
        readmoreButton2.innerText = readMore;
        arrowImage.classList.remove("arrow-left");
        arrowImage.classList.add("arrow-right");
        readmoreButton2.append(arrowImage);
        card2.style.backgroundColor = color_collapse;
    }
});

readmoreButton3.addEventListener("click", ()=>{
    if(readmoreButton3.innerText == readMore){
        expandedText3.innerText = texts_expand.t3;
        readmoreButton3.innerText = showLess;
        arrowImage.classList.add("arrow-left");
        arrowImage.classList.remove("arrow-right");
        readmoreButton3.append(arrowImage);
        card3.style.backgroundColor = color_expand;
    }
    else{
        expandedText3.innerText = texts_collapsed.t3;
        readmoreButton3.innerText = readMore;   
        arrowImage.classList.remove("arrow-left");
        arrowImage.classList.add("arrow-right");
        readmoreButton3.append(arrowImage);
        card3.style.backgroundColor = color_collapse;
    }
});

readmoreButton4.addEventListener("click", ()=>{
    if(readmoreButton4.innerText == readMore){
        expandedText4.innerText = texts_expand.t4;
        readmoreButton4.innerText = showLess;
        arrowImage.classList.add("arrow-left");
        arrowImage.classList.remove("arrow-right");
        readmoreButton4.append(arrowImage);
        card4.style.backgroundColor = color_expand;
    }
    else{
        expandedText4.innerText = texts_collapsed.t4;
        readmoreButton4.innerText = readMore; 
        arrowImage.classList.remove("arrow-left");
        arrowImage.classList.add("arrow-right");
        readmoreButton4.append(arrowImage);       
        card4.style.backgroundColor = color_collapse;
    }
});

contactForm.addEventListener("onsubmit", (e)=>{
    e.preventDefault();
})

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
