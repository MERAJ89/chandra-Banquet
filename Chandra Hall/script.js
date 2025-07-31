// script.js
function toggleSelect(button) {
  const itemDiv = button.parentElement;
  const selected = itemDiv.classList.toggle("selected");
  button.textContent = selected ? "Deselect" : "Select";
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
// const closeBtn = document.getElementById("closeMenu");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu manually
// if (closeBtn) {
//   closeBtn.addEventListener("click", () => {
//     navLinks.classList.remove("show");
//   });
// }

// // Close menu when a link is clicked
// document.querySelectorAll(".nav-links a").forEach(link => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("show");
//   });
// });
