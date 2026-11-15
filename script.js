// 1. Toggle between dark and light themes
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}

// 2. Display the current year in the footer
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// 3. Handle contact form submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Contact form submitted!");
    alert("Thank you! Your form has been submitted.");
  });
}

// 4. Select all project cards and loop through them
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  console.log("Project card found:", card);
});
