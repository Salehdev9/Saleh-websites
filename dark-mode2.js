
let img1 = document.getElementById("contact-number");


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log("Chal raha houn");

  img1.style.visibility = "hidden";
}
