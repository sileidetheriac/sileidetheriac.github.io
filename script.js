
/* Carousel animation section */
var slide_Index = 1;

var delay;

var carousel;

function changeSlides(n){
    clearInterval(delay);
    if (n < 0){
        showSlides(slide_Index -= 1);
    } else {
    showSlides(slide_Index += 1); 
    }
  
    if (n === -1){
        delay = setInterval(function(){changeSlides(n + 2)}, 2000);
    } else {
        delay = setInterval(function(){changeSlides(n + 1)}, 2000);
    }
}

function currentSlide(n){
    clearInterval(delay);
    delay = setInterval(function(){
      changeSlides(n + 1)}, 2000);
    showSlides(slide_Index = n);
}

function showSlides(n){  
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slide_Index = 1};
    if (n < 1) {slide_Index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide_Index-1].style.display = "flex";
    dots[slide_Index-1].className += " active";
}

window.addEventListener("load",function() {
    showSlides(slide_Index);
    delay = setInterval(function(){changeSlides(1)}, 2000); 
    carousel = document.getElementsByClassName('animation')[0]; 
});

/* Image Rows - buttons */
document.getElementById("b1").addEventListener('click', function(event) {
    location.href="./explore.html";
});

document.getElementById("b2").addEventListener('click', function(event) {
    location.href="./recipes.html";
});

document.getElementById("b3").addEventListener('click', function(event) {
    location.href="./feedback.html";
});