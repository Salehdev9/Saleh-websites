let hamburgerIcon = document.getElementById("hamburger-menu-icon");

let closeBtn = document.getElementById("close-btn-icon");

let hamburgerMenu = document.getElementById("hamburger-navbar");

function hamburgerIconClick(){
  hamburgerIcon.style.display = "none";
  closeBtn.style.display = "block";
  hamburgerMenu.style.display = "block";

}

function closeBtnCLick(){
  closeBtn.style.display = "none";
  hamburgerIcon.style.display = "block";
  hamburgerMenu.style.display = "none";
}