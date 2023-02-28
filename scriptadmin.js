const adtitleOne = document.querySelector(".adtitle-one");
const adtitleTwo = document.querySelector(".adtitle-two");

const adp1 = document.querySelector(".adone");
const adp2 = document.querySelector(".adtwo");

const ba1 = document.querySelector(".ba1");
const ba2 = document.querySelector(".ba2");

let score12 = true;
let score13 = true;

const icon12 = document.querySelector(".bicon12");
const icon13 = document.querySelector(".bicon13");

adtitleOne.addEventListener("click", () => {
  if (score12) {
    ba1.classList.add("color-change");
    adp1.innerHTML = `We will assist you in obtaining necessary licenses and permits for different activities: preparation of documents necessary for the legislation of Georgia, monitoring of the license and permit preparation process and representation in the relevant bodies. `;
    score12 = !score12;
    icon12.src = "angle-up.png";
  } else {
    icon12.src = "angle-down.png";
    ba1.classList.remove("color-change");
    adp1.innerHTML = "";
    score12 = true;
  }
});

adtitleTwo.addEventListener("click", () => {
  if (score13) {
    ba2.classList.add("color-change");
    adp2.innerHTML = `We offer legal services on issues related to the Code of Administrative Offenses of Georgia, namely:
    Administrative offenses in the field of labor, health and social protection; Administrative violations of state property; Administrative violations originating in the field of environment protection, natural use, historical and cultural monuments; Administrative violations originating from veterinary-sanitary rules; Administrative violations originating in the ownership of housing, utility, and social well-being; Administrative violation of public order; Administrative violations originating from police penalties. `;
    score13 = !score13;
    icon13.src = "angle-up.png";
  } else {
    icon13.src = "angle-down.png";
    ba2.classList.remove("color-change");
    adp2.innerHTML = "";
    score13 = true;
  }
});
