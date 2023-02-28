"use strict";

const titleOne = document.querySelector(".title-one");
const titleTwo = document.querySelector(".title-two");
const titleThree = document.querySelector(".title-three");
const titleFour = document.querySelector(".title-four");
const titleFive = document.querySelector(".title-five");
const titleSix = document.querySelector(".title-six");
const titleSeven = document.querySelector(".title-seven");
const titleEight = document.querySelector(".title-eight");
const titleNine = document.querySelector(".title-nine");
const titleTen = document.querySelector(".title-ten");
const titleEleven = document.querySelector(".title-eleven");

const icon1 = document.querySelector(".bicon1");
const icon2 = document.querySelector(".bicon2");
const icon3 = document.querySelector(".bicon3");
const icon4 = document.querySelector(".bicon4");
const icon5 = document.querySelector(".bicon5");
const icon6 = document.querySelector(".bicon6");
const icon7 = document.querySelector(".bicon7");
const icon8 = document.querySelector(".bicon8");
const icon9 = document.querySelector(".bicon9");
const icon10 = document.querySelector(".bicon10");
const icon11 = document.querySelector(".bicon11");

const p1 = document.querySelector(".one");
const p2 = document.querySelector(".two");
const p3 = document.querySelector(".three");
const p4 = document.querySelector(".four");
const p5 = document.querySelector(".five");
const p6 = document.querySelector(".six");
const p7 = document.querySelector(".seven");
const p8 = document.querySelector(".eight");
const p9 = document.querySelector(".nine");
const p10 = document.querySelector(".ten");
const p11 = document.querySelector(".eleven");

let score1 = true;
let score2 = true;
let score3 = true;
let score4 = true;
let score5 = true;
let score6 = true;
let score7 = true;
let score8 = true;
let score9 = true;
let score10 = true;
let score11 = true;

let bc1 = document.querySelector(".bc1");
let bc2 = document.querySelector(".bc2");
let bc3 = document.querySelector(".bc3");
let bc4 = document.querySelector(".bc4");
let bc5 = document.querySelector(".bc5");
let bc6 = document.querySelector(".bc6");
let bc7 = document.querySelector(".bc7");
let bc8 = document.querySelector(".bc8");
let bc9 = document.querySelector(".bc9");
let bc10 = document.querySelector(".bc10");
let bc11 = document.querySelector(".bc11");

titleOne.addEventListener("click", () => {
  if (score1) {
    bc1.classList.add("color-change");
    p1.innerHTML = `We provide disputes arising from entrepreneurial activities for legal entities.
    (Local or/and International) One of the most important elements of the service is the participation in the following business disputes and transactions Purchase of enterprise / shares. International investment transaction;
    Commercial real estate transaction;
    Transaction of state tender proposal of the company;
    Building Friendly Transactions.`;
    score1 = !score1;
    icon1.src = "angle-up.png";
  } else {
    icon1.src = "angle-down.png";
    bc1.classList.remove("color-change");
    p1.innerHTML = "";
    score1 = true;
  }
});

titleTwo.addEventListener("click", () => {
  if (score2) {
    bc2.classList.add("color-change");
    p2.innerHTML = `We offer: business entities (limited liability companies, joint stock companies, joint and several liability, partnership, cooperative, sole proprietorship, partnership and entrepreneurial (non-commercial) legal entities) for the first registration, registration of changes, reorganization Performance bass, branches, including branches of foreign enterprise registration, enterprise re-domiciling.
    We will also assist you in organizing the organizational-legal form of the company and corporate structure of the company. To conduct business deals, you will have legal advice and analyze your legal problem in order to conclude a contract for entrepreneurial entrepreneurs.`;
    icon2.src = "angle-up.png";
    score2 = !score2;
  } else {
    icon2.src = "angle-down.png";
    bc2.classList.remove("color-change");
    p2.innerHTML = "";
    score2 = true;
  }
});

titleThree.addEventListener("click", () => {
  if (score3) {
    bc3.classList.add("color-change");
    p3.innerHTML = `We will protect your rights from disputes arising from contractual relations. We also offer you to prepare all kinds of agreements related to real and movable items, rights and requirements, legal inspection, settlement of disputes arising from them (loan, purchase, exchange, rent, rent, lease, lease, franchise,
    liabilities, mortgage, margin, brokerage, surrender, and
    others)`;
    icon3.src = "angle-up.png";
    score3 = !score3;
  } else {
    icon3.src = "angle-down.png";
    bc3.classList.remove("color-change");
    p3.innerHTML = "";
    score3 = true;
  }
});
titleFour.addEventListener("click", () => {
  if (score4) {
    bc4.classList.add("color-change");
    p4.innerHTML = `Labor Law is a special law of private law, which regulates the relationship between employer and employee. The disputes arising from labor relations offer representation in common courts: the service is restored, the compensation, the remuneration of the unpaid salaries, etc.`;
    score4 = !score4;
    icon4.src = "angle-up.png";
  } else {
    icon4.src = "angle-down.png";
    bc4.classList.remove("color-change");
    p4.innerHTML = "";
    score4 = true;
  }
});

titleFive.addEventListener("click", () => {
  if (score5) {
    bc5.classList.add("color-change");
    p5.innerHTML = `We offer legal services on contractual and lawful obligations (shared rights, execution of others without assignments, unfounded enrichment, delays caused by violations (material and moral damage).`;
    score5 = !score5;
    icon5.src = "angle-up.png";
  } else {
    icon5.src = "angle-down.png";
    bc5.classList.remove("color-change");
    p5.innerHTML = "";
    score5 = true;
  }
});

titleSix.addEventListener("click", () => {
  if (score6) {
    bc6.classList.add("color-change");
    p6.innerHTML = `The following types of services are available for purchase and alienation of real estate: legal advice; Preparation of real estate contracts; Signing up and registering them in public registry; Conduct legal assessment of property acquired in favor of investors; Presenting customer’s interests in privatization process; as well as help, legitimate possession or use of arbitrary state land ownership interest related to the recognition procedures of the application to
    compile the required evidence and documentation for, the representation of the relevant authorities and other necessary procedures.`;
    score6 = !score6;
    icon6.src = "angle-up.png";
  } else {
    icon6.src = "angle-down.png";
    bc6.classList.remove("color-change");
    p6.innerHTML = "";
    score6 = true;
  }
});

titleSeven.addEventListener("click", () => {
  if (score7) {
    bc7.classList.add("color-change");
    p7.innerHTML = `We offer you to settle disputes based on neighboring relations, preparation of real estate separation treaties and registering them in their respective authenticity, representation in courts, third parties.`;
    score7 = !score7;
    icon7.src = "angle-up.png";
  } else {
    icon7.src = "angle-down.png";
    bc7.classList.remove("color-change");
    p7.innerHTML = "";
    score7 = true;
  }
});

titleEight.addEventListener("click", () => {
  if (score8) {
    bc8.classList.add("color-change");
    p8.innerHTML = `We Offer the following services related to Family Law: Make a Wedding Contract; Protection of rights in the disputes between the spouses and individual and common property; Divorce, parental right, restriction of parental rights,impairment of alimony, decrease and increase of amount of alimony and compile suits related to other family affairs,
    collection of evidence, representation in court, protection of the party’s personal and property rights.`;
    score8 = !score8;
    icon8.src = "angle-up.png";
  } else {
    icon8.src = "angle-down.png";
    bc8.classList.remove("color-change");
    p8.innerHTML = "";
    score8 = true;
  }
});

titleNine.addEventListener("click", () => {
  if (score9) {
    bc9.classList.add("color-change");
    p9.innerHTML = `We will assist you in solving issues related to the acquisition of estate property: present in common courts;You will have a consultation on legal issues related to drawing up a will; In case of disputes between the heirs we will defend the interests of the user; Defend the legitimate interests of the heirs and other interested persons; We also provide the issues related to execution of the will.`;
    score9 = !score9;
    icon9.src = "angle-up.png";
  } else {
    icon9.src = "angle-down.png";
    bc9.classList.remove("color-change");
    p9.innerHTML = "";
    score9 = true;
  }
});

titleTen.addEventListener("click", () => {
  if (score10) {
    bc10.classList.add("color-change");
    p10.innerHTML = `We provide you with the authorization of copyright, property and personal non-property rights of the author, copyright owner, other copyrights, as well as protection of their neighboring rights and compensation for damages caused by their breach. Also, we will assist you in creating and concluding a contract related to the creation of copyright and author’s property rights (creation of special and conventional license agreements).`;
    score10 = !score10;
    icon10.src = "angle-up.png";
  } else {
    icon10.src = "angle-down.png";
    bc10.classList.remove("color-change");
    p10.innerHTML = "";
    score10 = true;
  }
});
titleEleven.addEventListener("click", () => {
  if (score11) {
    bc11.classList.add("color-change");
    p11.innerHTML = `Provide legal services in the process of execution of a valid legal decision by the Court, representation in the relevant service of the Enforcement Bureau and representation in the auctions for the purposes of enforcement.`;
    score11 = !score11;
    icon11.src = "angle-up.png";
  } else {
    icon11.src = "angle-down.png";
    bc11.classList.remove("color-change");
    p11.innerHTML = "";
    score11 = true;
  }
});
