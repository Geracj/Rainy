// header
var btn = document.querySelector('.icon');

btn.addEventListener("click", function () {
    var x = document.querySelector('#myTopnav');

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
});

// main

var modal =  document.querySelector('#myModal');
var btn = document.querySelector('#myBtn');
var span = document.querySelector('.close');


btn.addEventListener("click", function () {
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// toTopBtn

window.onscroll = function () {
  scrollFunction()
};

var btn = document.querySelector('#toTopBtn');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.addEventListener("click", function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// Slider

var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.querySelectorAll('.slide-box');
    var dots = document.querySelectorAll(".dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 3000);
}

// accordion

var acc = document.querySelectorAll('.accor');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// map
