let free_quote = document.getElementById("free-quote");
let free_quote_text = document.getElementById("free-quote-text");

function freeQuote(){
  free_quote.style.backgroundColor = "#fa65b1";
  free_quote_text.style.color = "white";
}

function freeQuote2(){
  free_quote.style.backgroundColor = "transparent";
  free_quote_text.style.color = "#fa65b1";
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-container");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let number = document.getElementById("contact-number");
let img1 = document.getElementById("home-bg-img1");
let img2 = document.getElementById("home-bg-img2");
let img3 = document.getElementById("services-left-img");
let img4 = document.getElementById("portfolio-top-left");
let img5 = document.getElementById("portfolio-bottom-right");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log("Chal raha houn");
  
  number.innerHTML = "321";
  img1.style.visibility = "hidden";
  img2.style.visibility = "hidden";
  img3.style.visibility = "hidden";
  img4.style.visibility = "hidden";
  img5.style.visibility = "hidden";
}