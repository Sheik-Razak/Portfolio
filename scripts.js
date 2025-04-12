'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {
//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }
//   });
// }

// contact form variables
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("[data-form]");
//   const formInputs = document.querySelectorAll(".form-input");
//   const formBtn = document.querySelector(".form-btn");

//   if (!form || !formInputs || !formBtn) {
//     console.error("Form elements not found! Check your HTML.");
//     return;
//   }

//   form.addEventListener("submit", async function (event) {
//     event.preventDefault();

//     formBtn.setAttribute("disabled", ""); 
//     formBtn.textContent = "Sending..."; 

//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/abdulrazak3713@gmail.com", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         window.location.href = "thank-you.html";
//       } else {
//         alert("Failed to send message. Try again later.");
//       }
//     } catch (error) {
//       console.error("FormSubmit Error:", error);
//       alert("An error occurred. Please check the console.");
//     } finally {
//       formBtn.removeAttribute("disabled");
//       formBtn.textContent = "Send Message";
//     }
//   });

//   // Enable submit button only when all fields are valid
//   formInputs.forEach(input => {
//     input.addEventListener("input", function () {
//       formBtn.disabled = !form.checkValidity();
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll(".form-input");
  const formBtn = document.querySelector(".form-btn");

  if (!form || !formInputs || !formBtn) {
    console.error("Form elements not found! Check your HTML.");
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    formBtn.setAttribute("disabled", ""); 
    formBtn.textContent = "Sending..."; 

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/abdulrazak3713@gmail.com", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      console.log(data); // Log the response to ensure it contains `success: true`

      if (data.success) {
        window.location.href = "thank-you.html"; // Redirect if successful
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    } finally {
      formBtn.removeAttribute("disabled"); // Re-enable button
      formBtn.textContent = "Send Message"; // Reset button text
    }
  });

  // Enable submit button only when all fields are valid
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      formBtn.disabled = !form.checkValidity();
    });
  });

  // Add form status element
  const formStatus = document.createElement("div");
  formStatus.id = "form-status";
  formStatus.setAttribute("aria-live", "polite");
  document.body.appendChild(formStatus);

  const formStatusElement = document.getElementById("form-status");
  formStatusElement.textContent = "Sending...";
});

const menuToggle = document.getElementById('menu-toggle');
const navbarList = document.getElementById('navbar-list');

menuToggle.addEventListener('click', () => {
  navbarList.classList.toggle('active');
});
