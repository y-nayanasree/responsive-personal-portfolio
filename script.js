
// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form validation
const contactForm = document.getElementById("contactForm");

const nameField = document.getElementById("contactName");
const emailField = document.getElementById("contactEmail");
const messageField = document.getElementById("contactMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formStatus.textContent = "";

  let isValid = true;

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Validate name
  if (name.length < 2) {
    nameError.textContent = "Please enter at least 2 characters.";
    isValid = false;
  }

  // Validate email
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate message
  if (message.length < 10) {
    messageError.textContent = "Message must contain at least 10 characters.";
    isValid = false;
  }

  // Show result
  if (isValid) {
    formStatus.textContent =
      "Form validated successfully! This demo does not send messages.";

    contactForm.reset();
  }
});
