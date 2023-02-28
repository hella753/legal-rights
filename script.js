"use strict";
const btnScrollTo = document.querySelector(".btn-learnmore");
const section1 = document.querySelector("#section--1");
const aboutUs = document.querySelector(".about-us");
const contact = document.querySelector(".contactmenu");
const section2 = document.querySelector("#section--2");
const home = document.querySelector(".home");
const mainsection = document.querySelector("#main--section");
home.addEventListener("click", function () {
  mainsection.scrollIntoView({ behavior: "smooth" });
});
aboutUs.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});

const civadp = document.querySelector(".civadp");
let civisclicked = true;
let admisclicked = false;
const civbtn = document.querySelector(".civ");
const admbtn = document.querySelector(".adm");
const changebtn = document.querySelector(".civbutton");
const linkbtn = document.querySelector(".service-style");

civbtn.addEventListener("click", function () {
  if (civisclicked === false) {
    civadp.innerHTML = `Civil law is a field of law, that regulates private property, family and personal relationships based on equality of persons. The law company “Legal Rights Georgia” offers you legal services in all fields of civil law`;
    civisclicked = true;
    admisclicked = false;
  }
});

admbtn.addEventListener("click", function () {
  if (admisclicked === false) {
    civadp.innerHTML = `Administrative law is one of the area of public law. It combines the organizational arrangement of governing bodies, the implementation of administrative functions and administrative procedures. Law company “Legal Rights Georgia” offers legal services in all fields of administrative law.
    `;
    admisclicked = true;
    civisclicked = false;
  }
});

changebtn.addEventListener("click", function () {
  if (admisclicked == true) {
    document.getElementById("servsty").href = "administrativelaw.html";
  } else {
    document.getElementById("servsty").href = "civillaw.html";
  }
});
