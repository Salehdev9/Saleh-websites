let cards = document.getElementsByClassName("cards");

let apartments = document.getElementById("apartments");

let seoAnalysisAndDailyReports = document.getElementById("seo-analysis-and-daily-reports");

let seoAnalysisImg = document.getElementById("seo-analysis-img");



function apartmentsFunction(){
  traveling.style.boxShadow = "none";
  foodAndLife.style.boxShadow = "none"
  cars.style.boxShadow = "none"
  shopping.style.boxShadow = "none"

  apartments.style.boxShadow = "0 0 15px rgba(134, 134, 134, 0.3)";

  seoAnalysisAndDailyReports.innerText = "SEO Analysis & Daily Reports"

  seoAnalysisImg.src = "./seo-analysis-img.jpg"
  
}


let foodAndLife = document.getElementById("food-and-life");

function foodAndLifeFunction(){
  apartments.style.boxShadow = "none";
  cars.style.boxShadow = "none";
  shopping.style.boxShadow = "none";
  traveling.style.boxShadow = "none";
  
  foodAndLife.style.boxShadow = "0 0 15px rgba(134, 134, 134, 0.3)";

  seoAnalysisAndDailyReports.innerText = "Healthy Food & Life";

  seoAnalysisImg.src = "./services-image-02.jpg"

}

let cars = document.getElementById("cars");
function carsFunction(){
  apartments.style.boxShadow = "none";
  foodAndLife.style.boxShadow = "none"
  shopping.style.boxShadow = "none";
  traveling.style.boxShadow = "none";

  cars.style.boxShadow = "0 0 15px rgba(134, 134, 134, 0.3)";

  seoAnalysisAndDailyReports.innerText = "Car Re-search & Transport";

  seoAnalysisImg.src = "./services-image-03.jpg"
}

let shopping = document.getElementById("shopping")

function shoppingFunction(){
  apartments.style.boxShadow = "none";
  foodAndLife.style.boxShadow = "none"
  cars.style.boxShadow = "none"
  traveling.style.boxShadow = "none";


  shopping.style.boxShadow = "0 0 15px rgba(134, 134, 134, 0.3)";

  seoAnalysisAndDailyReports.innerText = "Online Shopping & Tracking ID";

  seoAnalysisImg.src = "./services-image-04.jpg"
}

let traveling = document.getElementById("traveling")

function travelingFunction(){
  apartments.style.boxShadow = "none";
  foodAndLife.style.boxShadow = "none"
  cars.style.boxShadow = "none"
  shopping.style.boxShadow = "none"

  traveling.style.boxShadow = "0 0 15px rgba(134, 134, 134, 0.3)";

  seoAnalysisAndDailyReports.innerText = "Enjoy & Travel";

  seoAnalysisImg.src = "./seo-analysis-img.jpg"
}




// -------------------------------------------

let project1 = document.getElementById("project1")

let websiteBuilder1 = document.getElementById("website-builder1");

let marketing1 = document.getElementById("marketing1");

function projectHover1(){
  project1.style.transition = ".20s"
  websiteBuilder1.style.color = "#FA65B1";
  marketing1.style.color = "#FA65B1";
}

function projectOut1(){
  websiteBuilder1.style.color = "black";
  marketing1.style.color = "gray";
}


let project2 = document.getElementById("project2")

let websiteBuilder2 = document.getElementById("website-builder2");

let marketing2 = document.getElementById("marketing2");

function projectHover2(){
  project2.style.transition = ".20s"
  websiteBuilder2.style.color = "#FA65B1";
  marketing2.style.color = "#FA65B1";
}

function projectOut2(){
  websiteBuilder2.style.color = "black";
  marketing2.style.color = "gray";
}

let project3 = document.getElementById("project3")

let websiteBuilder3 = document.getElementById("website-builder3");

let marketing3 = document.getElementById("marketing3");

function projectHover3(){
  project3.style.transition = ".20s"
  websiteBuilder3.style.color = "#FA65B1";
  marketing3.style.color = "#FA65B1";
}

function projectOut3(){
  websiteBuilder3.style.color = "black";
  marketing3.style.color = "gray";
}

let project4 = document.getElementById("project4")

let websiteBuilder4 = document.getElementById("website-builder4");

let marketing4 = document.getElementById("marketing4");

function projectHover4(){
  project4.style.transition = ".20s"
  websiteBuilder4.style.color = "#FA65B1";
  marketing4.style.color = "#FA65B1";
}

function projectOut4(){
  websiteBuilder4.style.color = "black";
  marketing4.style.color = "gray";
}

let project5 = document.getElementById("project5")

let websiteBuilder5 = document.getElementById("website-builder5");

let marketing5 = document.getElementById("marketing5");

function projectHover5(){
  project5.style.transition = ".20s"
  websiteBuilder5.style.color = "#FA65B1";
  marketing5.style.color = "#FA65B1";
}

function projectOut5(){
  websiteBuilder5.style.color = "black";
  marketing5.style.color = "gray";
}