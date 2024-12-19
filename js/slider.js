let slideIndexTop = 0;
showSlidesTop();

function showSlidesTop() {
    let i;
    let slidesTop = document.getElementsByClassName("auto");
    for (i = 0; i < slidesTop.length; i++) {
        slidesTop[i].style.display = "none";
    }
    slideIndexTop++;
    if (slideIndexTop > slidesTop.length) { slideIndexTop = 1 }
    slidesTop[slideIndexTop - 1].style.display = "block";
    setTimeout(showSlidesTop, 3000); // Change image every 3 seconds
}

let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
let dotId = ["dot1", "dot2", "dot3", "dot4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlides(n, no) {
    showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no]-1].className += " active";
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}