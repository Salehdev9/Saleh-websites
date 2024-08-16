let darkMode1 = document.getElementById("dark-mode");
let lightMode = document.getElementById("light-mode");

let body = document.getElementById("body");

let navbar1 = document.getElementById("navbar-container")

let navbarlist1 = document.getElementById("navbar-list1");

let navbarlist2 = document.getElementById("navbar-list2");

let navbarlist3 = document.getElementById("navbar-list3");

let navbarlist4 = document.getElementById("navbar-list4");

let navbarlist5 = document.getElementById("navbar-list5");

let navbarlist6 = document.getElementById("navbar-list6");

let homeBgImg = document.getElementById("home-bg-img1");
let homeBgImg2 = document.getElementById("home-bg-img2");

let hamburgerIcon = document.getElementById("hamburger-menu-icon");

let closeBtn = document.getElementById("close-btn-icon");

let hamburgerMenu = document.getElementById("hamburger-navbar");


let weBoost = document.getElementById("we-boost");


let whoIsDigiMedia = document.getElementById("who-is-digimedia");

let codingCover = document.getElementById("coding-cover");


let photoshopCover = document.getElementById("photoshop-cover");

let animationCover = document.getElementById("animation-cover");

let coding90 = document.getElementById("coding90");

let photoshop80 = document.getElementById("photoshop80");

let animation80 = document.getElementById("animation80");


let servicesImg = document.getElementById("services-left-img"); 

let whatOurAgency = document.getElementById("what-our-agency");

let apartments = document.getElementById("apartments");

let foodAndLife = document.getElementById("food-and-life");

let cars = document.getElementById("cars");

let shopping = document.getElementById("shopping");

let traveling = document.getElementById("traveling");

let bigCard = document.getElementById("big-card");

let seoList1 = document.getElementById("seo-list1");
let seoList2 = document.getElementById("seo-list2");
let seoList3 = document.getElementById("seo-list3");
let seoList4 = document.getElementById("seo-list4");
let seoList5 = document.getElementById("seo-list5");
let seoList6 = document.getElementById("seo-list6");

let portfolioLeft = document.getElementById("portfolio-top-left");

let seeOurRecent = document.getElementById("see-our-recent");

let portfolioRight  = document.getElementById("portfolio-bottom-right");

let project1 = document.getElementById("project1-img");
let project2 = document.getElementById("project2-img");
let project3 = document.getElementById("project3-img");
let project4 = document.getElementById("project4-img");
let project5 = document.getElementById("project5-img");

let projectBtm1 = document.getElementById("project-btm1");
let projectBtm2 = document.getElementById("project-btm2");
let projectBtm3 = document.getElementById("project-btm3");
let projectBtm4 = document.getElementById("project-btm4");
let projectBtm5 = document.getElementById("project-btm5");

let checkOur = document.getElementById("check-our");

let bigLorem = document.getElementById("blog-lorem1");

let authorName = document.getElementById("author-name");

let dicoverMore = document.getElementById("discover-more");

let lorem1 = document.getElementById("right-lorem1");
let lorem2 = document.getElementById("right-lorem2");
let lorem3 = document.getElementById("right-lorem3");


let getInTouch = document.getElementById("get-in-touch");

let contactForm = document.getElementById("contact-form-right");

let name1 = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let textarea = document.getElementById("textarea");

let sendMessage = document.getElementById("send-message-now");

let seoAnalysisImg = document.getElementById("seo-analysis-img");



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


function darkMode(){
  lightMode.style.display = "block";
  darkMode1.style.display = "none";
  


  body.style.backgroundColor = "black";
  navbar1.style.backgroundColor = "black";
  navbarlist1.style.color = "white";
  navbarlist2.style.color = "white";
  navbarlist3.style.color = "white";
  navbarlist4.style.color = "white";
  navbarlist5.style.color = "white";
  navbarlist6.style.color = "white";

  hamburgerIcon.style.filter = "invert(0%)";
  closeBtn.style.filter = "invert(0%)";
  


  homeBgImg.style.visibility = "hidden";
  homeBgImg2.style.visibility = "hidden";

  weBoost.style.color = "white";



  whoIsDigiMedia.style.color = "white";

  codingCover.style.backgroundColor = "black";

  photoshopCover.style.backgroundColor = "black";

  animationCover.style.backgroundColor = "black";

  coding90.style.color = "white";
  photoshop80.style.color = "white";
  animation80.style.color = "white";

  servicesImg.style.visibility = "hidden";
  whatOurAgency.style.color = "white";

  apartments.style.backgroundColor = "black";
  apartments.style.color = "white";
  apartments.style.border = "1px solid white";

  foodAndLife.style.backgroundColor = "black";
  foodAndLife.style.color = "white";
  foodAndLife.style.border = "1px solid white";

  cars.style.backgroundColor = "black";
  cars.style.color = "white";
  cars.style.border = "1px solid white";
  
  shopping.style.backgroundColor = "black";
  shopping.style.color = "white";
  shopping.style.border = "1px solid white";
  
  traveling.style.backgroundColor = "black";
  traveling.style.color = "white";
  traveling.style.border = "1px solid white";

  bigCard.style.backgroundColor = "black";

  seoList1.style.color = "white";
  seoList2.style.color = "white";
  seoList3.style.color = "white";
  seoList4.style.color = "white";
  seoList5.style.color = "white";
  seoList6.style.color = "white";

  seoAnalysisImg.style.borderRadius = "12px";


  portfolioLeft.style.visibility = "hidden";
  
  seeOurRecent.style.color = "white";
  
  portfolioRight.style.visibility = "hidden";

  project1.style.borderRadius = "22px 22px 0 0";
  project2.style.borderRadius = "22px 22px 0 0";
  project3.style.borderRadius = "22px 22px 0 0";
  project4.style.borderRadius = "22px 22px 0 0";
  project5.style.borderRadius = "22px 22px 0 0";

  projectBtm1.style.backgroundColor = "black";
  projectBtm1.style.color = "white";
  
  projectBtm2.style.backgroundColor = "black";
  projectBtm2.style.color = "white";
  
  projectBtm3.style.backgroundColor = "black";
  projectBtm3.style.color = "white";

  projectBtm4.style.backgroundColor = "black";
  projectBtm4.style.color = "white";

  projectBtm5.style.backgroundColor = "black";
  projectBtm5.style.color = "white";

  checkOur.style.color = "white";

  bigLorem.style.color = "white";

  authorName.style.color = "white";

  dicoverMore.style.backgroundColor = "black";

  lorem1.style.color = "white";
  lorem2.style.color = "white";
  lorem3.style.color = "white";

  getInTouch.style.color = "white";

  contactForm.style.backgroundColor = "black";
  contactForm.style.color = "white";

  name1.style.backgroundColor = "black";
  email.style.backgroundColor = "black";
  subject.style.backgroundColor = "black";
  textarea.style.backgroundColor = "black";

  sendMessage.style.backgroundColor = "black";
}