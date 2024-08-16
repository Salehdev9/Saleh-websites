let darkMode2 = document.getElementById("dark-mode");
let lightMode2 = document.getElementById("light-mode");

let body1 = document.getElementById("body");

let navbar2 = document.getElementById("navbar-container")

let navbarList1 = document.getElementById("navbar-list1");

let navbarList2 = document.getElementById("navbar-list2");

let navbarList3 = document.getElementById("navbar-list3");

let navbarList4 = document.getElementById("navbar-list4");

let navbarList5 = document.getElementById("navbar-list5");

let navbarList6 = document.getElementById("navbar-list6");

let homeBgImg1 = document.getElementById("home-bg-img1");
let homeBgImg3 = document.getElementById("home-bg-img2");

let hamburgerIcon1 = document.getElementById("hamburger-menu-icon");

let closeBtn1 = document.getElementById("close-btn-icon");


let weBoost1 = document.getElementById("we-boost");


let whoIsDigiMedia1 = document.getElementById("who-is-digimedia");

let codingCover1 = document.getElementById("coding-cover");


let photoshopCover1 = document.getElementById("photoshop-cover");

let animationCover1 = document.getElementById("animation-cover");

let coding901 = document.getElementById("coding90");

let photoshop801 = document.getElementById("photoshop80");

let animation801 = document.getElementById("animation80");


let servicesImg1 = document.getElementById("services-left-img"); 

let whatOurAgency1 = document.getElementById("what-our-agency");

let apartments1 = document.getElementById("apartments");

let foodAndLife1 = document.getElementById("food-and-life");

let cars1 = document.getElementById("cars");

let shopping1 = document.getElementById("shopping");

let traveling1 = document.getElementById("traveling");

let bigCard1 = document.getElementById("big-card");

let seoList11 = document.getElementById("seo-list1");
let seoList22 = document.getElementById("seo-list2");
let seoList33 = document.getElementById("seo-list3");
let seoList44 = document.getElementById("seo-list4");
let seoList55 = document.getElementById("seo-list5");
let seoList66 = document.getElementById("seo-list6");

let portfolioLeft1 = document.getElementById("portfolio-top-left");

let seeOurRecent1 = document.getElementById("see-our-recent");

let portfolioRight1  = document.getElementById("portfolio-bottom-right");

let project11 = document.getElementById("project1-img");
let project22 = document.getElementById("project2-img");
let project33 = document.getElementById("project3-img");
let project44 = document.getElementById("project4-img");
let project55 = document.getElementById("project5-img");

let projectBtm11 = document.getElementById("project-btm1");
let projectBtm22 = document.getElementById("project-btm2");
let projectBtm33 = document.getElementById("project-btm3");
let projectBtm44 = document.getElementById("project-btm4");
let projectBtm55 = document.getElementById("project-btm5");

let checkOur1 = document.getElementById("check-our");

let bigLorem1 = document.getElementById("blog-lorem1");

let authorName1 = document.getElementById("author-name");

let dicoverMore1 = document.getElementById("discover-more");

let lorem11 = document.getElementById("right-lorem1");
let lorem22 = document.getElementById("right-lorem2");
let lorem33 = document.getElementById("right-lorem3");


let getInTouch1 = document.getElementById("get-in-touch");

let contactForm1 = document.getElementById("contact-form-right");

let name11 = document.getElementById("name");
let email1 = document.getElementById("email");
let subject1 = document.getElementById("subject");
let textarea1 = document.getElementById("textarea");

let sendMessage1 = document.getElementById("send-message-now");

let seoAnalysisImg1 = document.getElementById("seo-analysis-img");



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


function lightMode1(){
  lightMode2.style.display = "none";
  darkMode2.style.display = "block";
  


  body1.style.backgroundColor = "white";
  navbar2.style.backgroundColor = "white";
  navbarList1.style.color = "black";
  navbarList2.style.color = "black";
  navbarList3.style.color = "black";
  navbarList4.style.color = "black";
  navbarList5.style.color = "black";
  navbarList6.style.color = "black";

  hamburgerIcon1.style.filter = "invert(100%)";
  closeBtn1.style.filter = "invert(100%)";


  homeBgImg1.style.visibility = "hidden";
  homeBgImg3.style.visibility = "hidden";

  weBoost1.style.color = "black";



  whoIsDigiMedia1.style.color = "black";

  codingCover1.style.backgroundColor = "white";

  photoshopCover1.style.backgroundColor = "white";

  animationCover1.style.backgroundColor = "white";

  coding901.style.color = "black";
  photoshop80.style.color = "black";
  animation801.style.color = "black";

  servicesImg1.style.visibility = "hidden";
  whatOurAgency1.style.color = "black";

  apartments1.style.backgroundColor = "white";
  apartments1.style.color = "black";
  // apartments1.style.border = "1px solid black";

  foodAndLife1.style.backgroundColor = "white";
  foodAndLife1.style.color = "black";
  // foodAndLife1.style.border = "1px solid black";

  cars1.style.backgroundColor = "white";
  cars1.style.color = "black";
  // cars1.style.border = "1px solid black";
  
  shopping1.style.backgroundColor = "white";
  shopping1.style.color = "black";
  // shopping1.style.border = "1px solid black";
  
  traveling1.style.backgroundColor = "white";
  traveling1.style.color = "black";
  // traveling1.style.border = "1px solid black";

  bigCard1.style.backgroundColor = "white";

  seoList11.style.color = "black";
  seoList22.style.color = "black";
  seoList33.style.color = "black";
  seoList44.style.color = "black";
  seoList55.style.color = "black";
  seoList66.style.color = "black";

  seoAnalysisImg1.style.borderRadius = "12px";


  portfolioLeft1.style.visibility = "hidden";
  
  seeOurRecent1.style.color = "black";
  
  portfolioRight1.style.visibility = "hidden";

  project11.style.borderRadius = "22px 22px 0 0";
  project22.style.borderRadius = "22px 22px 0 0";
  project33.style.borderRadius = "22px 22px 0 0";
  project44.style.borderRadius = "22px 22px 0 0";
  project55.style.borderRadius = "22px 22px 0 0";

  projectBtm11.style.backgroundColor = "white";
  projectBtm11.style.color = "black";
  
  projectBtm22.style.backgroundColor = "white";
  projectBtm22.style.color = "black";
  
  projectBtm33.style.backgroundColor = "white";
  projectBtm33.style.color = "black";

  projectBtm44.style.backgroundColor = "white";
  projectBtm44.style.color = "black";

  projectBtm55.style.backgroundColor = "white";
  projectBtm55.style.color = "black";

  checkOur1.style.color = "black";

  bigLorem1.style.color = "black";

  authorName1.style.color = "black";

  dicoverMore1.style.backgroundColor = "white";

  lorem11.style.color = "black";
  lorem22.style.color = "black";
  lorem33.style.color = "black";

  getInTouch1.style.color = "black";

  contactForm1.style.backgroundColor = "white";
  contactForm1.style.color = "black";

  name11.style.backgroundColor = "white";
  email1.style.backgroundColor = "white";
  subject1.style.backgroundColor = "white";
  textarea1.style.backgroundColor = "white";

  sendMessage1.style.backgroundColor = "white";
}