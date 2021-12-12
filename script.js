//Sticky Navbar
const nav = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
    if (window.scrollY == 0) {
        nav.classList.add("top-fixed");
    } else {
        nav.classList.remove("top-fixed");
    }
});

//Typing text effect
const nameStr = "Fahad Saifi";
const text = document.querySelector(".intro h1");
let charCount = 0;

function typing() {
    if (charCount < nameStr.length) {
        text.innerHTML += nameStr.charAt(charCount);
        charCount++;
    }
}

setInterval(typing, 250);

//Modal popup
const modal = document.querySelector(".modal");
const videoBtn = document.querySelector(".video-popup");
const closeBtn = document.querySelector(".close-modal i");

videoBtn.addEventListener('click', () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

//Creating download functionality
function reviewCv(url) {
    let win = window.open(url, '_blank');
    win.focus();
}

//portfolio slider
const portfolioContainer = document.querySelector(".portfolio-slider-container");
const slide = document.querySelector(".slide");
const slides = document.querySelectorAll(".slides");
const slideImages = document.querySelectorAll('.slides img');
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
console.log(nextBtn);
let slideCount = 1;
let slideId;

slide.style.transform = `translateX(${-100 * slideCount}%)`;

//Nextbutton functionality
nextBtn.addEventListener('click', function() {
    if (slideCount >= slides.length - 1) return;
    slideCount++;
    slide.style.transition = "transform 0.4s ease 0s";
    slide.style.transform = `translateX(${-100 * slideCount}%)`;
});

//Previous button functionality
prevBtn.addEventListener('click', function() {
    if (slideCount <= 0) return;
    slideCount--;
    slide.style.transition = "transform 0.4s ease 0s";
    slide.style.transform = `translateX(${-100 * slideCount}%)`;
});

slide.addEventListener('transitionend', function() {
    if (slides[slideCount].id == "first") {
        slide.style.transition = "none"
        slideCount = 1;
        slide.style.transform = `translateX(${-100 * slideCount}%)`;
    }
    if (slides[slideCount].id == "last") {
        slide.style.transition = "none";
        slideCount = slides.length - 2;
        slide.style.transform = `translateX(${-100 * slideCount}%)`;
    }
});

const startSlide = () => {
    slideId = setInterval(function() {
        if (slideCount >= slides.length - 1) return;
        slideCount++;
        slide.style.transition = "transform 0.3s ease 0s";
        slide.style.transform = `translateX(${-100 * slideCount}%)`;
    }, 3300);
}

portfolioContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

portfolioContainer.addEventListener('mouseleave', startSlide);

startSlide();

//Hamburger menu
const menuIcon = document.querySelector('.toggle-icon-container');
const menu = document.querySelector('.navbar .nav-links');
menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');

    if (menuIcon.classList.contains('active')) {
        menu.classList.add("fix");
    } else {
        menu.classList.remove("fix");
    }
});