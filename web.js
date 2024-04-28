let closeBotton = document.querySelector(".close_button");
let modalContainer = document.querySelector(".modal-box");
let registrationModal = document.querySelector(".Registration_Modal");
let header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const careerButtonMobile = document.querySelector("#mobile-career");
const careerMenuMobile = document.querySelector(".career__dropdown");
const body = document.querySelector("body");
const mobilecareer = document.querySelector(".mobile-career");
const space = document.querySelector("#space");

function isCareerButtonActive() {
  return careerButtonMobile.classList.contains("active");
}

hamburger.addEventListener("click", function () {
  const navList = document.querySelector(".nav__list");
  navList.classList.toggle("unset-height");

  body.classList.toggle("body-mobile");

  careerButtonMobile.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const navList = document.querySelector(".unset-height");
    navList.classList.toggle("set-height");
    mobilecareer.classList.toggle("mobile-career-increase");

    const currentDisplay = careerMenuMobile.style.display;
    careerMenuMobile.style.display =
      !currentDisplay || currentDisplay === "none" ? "block" : "none";
    const careerBody = document.querySelector(".hamburger-menu");
    careerBody.classList.toggle("unset-height");
    careerButtonMobile.classList.toggle("active");
    space.classList.toggle("space-open");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

[...document.querySelectorAll(".accordion .button")].forEach((button) => {
  const PADDING = 20;
  const maxWidth = 430;
  button.addEventListener("click", () => {
    const accordionBody = button
      .closest(".accordion")
      .querySelector(".accordion-body");
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      accordionBody.style.maxHeight =
        accordionBody.scrollHeight + PADDING * 2 + "px";
      accordionBody.style.padding = PADDING + "px";
      accordionBody.style.maxWidth = maxWidth + "px";
    } else {
      accordionBody.style.padding = "0px";
      accordionBody.style.maxHeight = 0;
      accordionBody.style.maxWidth = 0;
    }
  });
});

function closeRegistration_Modal() {
  closeBotton.addEventListener("click", function () {
    modalContainer.style.display = "none";
  });
}

function openRegistration_Modal() {
  window.addEventListener("load", function () {
    registrationModal.style.display = "fixed";
    registrationModal.classList.add("animate");
  });
}

function handleInvalidRegisterModalInput(input) {
  if (input.id === "fullName") {
    input.placeholder = "*נא להזין שם תקין ";
  }
  if (input.id === "phone") {
    input.placeholder = "*נא להזין מספר טלפון";
  }
  if (input.id === "email") {
    input.placeholder = "*נא להזין כתובת מייל תקינה";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  for (let i = 0; i < forms.length; i++) {
    const form = forms[i];
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    form.querySelector(".button").addEventListener("click", function (event) {
      let isValid = true;
      form.querySelectorAll("input").forEach((input) => {
        if (input.validationMessage) {
          input.classList.add("invalid");
          isValid = false;
          if (input.closest(".Registration_Modal")) {
            handleInvalidRegisterModalInput(input);
          }
        } else {
          input.classList.remove("invalid");
        }
      });

      if (isValid) {
        submitForm(this);
      }
    });
  }

  function submitForm() {
    document.getElementById("myForm").reset();
    modalContainer.style.display = "none";
    showSuccessModal();
  }

  function showSuccessModal() {
    let modal = document.getElementById("successModal");
    modal.style.display = "block";
  }
});

function closeModal() {
  let modal = document.getElementById("successModal");
  modal.style.display = "none";
}

function showContent(targetId) {
  let contentSection = document.getElementById(targetId);
  let promises = document.getElementById("promises");
  let marketingTricks = document.getElementById("marketing-tricks");

  contentSection.closest(".accordion").querySelector(".button").click();

  if (targetId === "marketing-tricks") {
    console.log("marketing-tricks");
    if (promises.classList.contains("active")) {
      promises.closest(".accordion").querySelector(".button").click();
    }
  }

  if (targetId === "promises") {
    if (marketingTricks.classList.contains("active")) {
      marketingTricks.closest(".accordion").querySelector(".button").click();
    }
  }

  contentSection.classList.add("active");
}

function setBodyProportions(topPadding) {
  document.body.style.paddingTop = topPadding + "px";
}

openRegistration_Modal();
closeRegistration_Modal();
