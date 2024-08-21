let img1 = document.getElementById("home-bg-img1");
let img2 = document.getElementById("services-left-img");
let img3 = document.getElementById("portfolio-top-left");
let img4 = document.getElementById("portfolio-bottom-right");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log("Chal raha houn");

  img1.style.visibility = "hidden";
  img2.style.visibility = "hidden";
  img3.style.visibility = "hidden";
  img4.style.visibility = "hidden";
  
}