
let img1 = document.getElementById("home-bg-img1");


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log("Chal raha houn");

  img1.style.width = "100px";
}
