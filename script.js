// ============================
// The Bhakti BowBerrys JavaScript
// ============================

// Newsletter Form

const newsletterForm = document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Thank you for subscribing to The Bhakti BowBerrys!");

newsletterForm.reset();

});

}

// Add To Cart Buttons

const cartButtons = document.querySelectorAll(".shop-btn");

cartButtons.forEach(button => {

button.addEventListener("click", function(){

if(button.tagName !== "A"){

alert("🛍️ Product added to cart successfully!");

}

});

});

// Smooth Reveal Animation

const revealElements = document.querySelectorAll(
".product-card, .feature-card, .testimonial-card, .mission-card, .process-card"
);

function revealOnScroll(){

revealElements.forEach(el=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Navbar Shadow

window.addEventListener("scroll", ()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.12)";

}else{

navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";

}

});

// Current Year Auto Update

const footerYear = document.querySelector(".year");

if(footerYear){
footerYear.textContent = new Date().getFullYear();
}