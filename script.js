
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");
const navLinkItems = navLinks.querySelectorAll("a");

// Show nav on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.style.display = "flex";
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

// Hide nav on close button click
closeBtn.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

if (window.innerWidth <= 768) {
  navLinks.style.display = "none";
}

// Hide nav on clicking a nav link (mobile view)
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none";
      hamburger.style.display = "block";
      closeBtn.style.display = "none";
    }
  });
});

// Optional: Reset nav on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
    hamburger.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    navLinks.style.display = "none";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  }
});

// Toggle selection and update textarea
// Get all .item elements and assign click logic
const selectedItemsTextarea = document.getElementById("selectedItems");

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    const categoryDiv = item.closest(".category");
    const itemName = item.querySelector("p").textContent.trim();
    const isSelected = item.classList.contains("selected");

    const limit = getCategoryLimit(categoryDiv);
    const selectedCount = categoryDiv.querySelectorAll(".item.selected").length;

    if (!isSelected) {
      // Select logic
      if (selectedCount >= limit) {
        alert(`You can only select ${limit} item(s) in this category.`);
        return;
      }
      item.classList.add("selected");
      addItemToTextarea(itemName);
    } else {
      // Deselect logic
      item.classList.remove("selected");
      removeItemFromTextarea(itemName);
    }
  });
});

// Extract limit from <h3> tag like "Paneer (any one)"
function getCategoryLimit(categoryDiv) {
  const h3 = categoryDiv.querySelector("h3").textContent;
  const match = h3.match(/\((.*?)\)/); // inside brackets
  if (!match) return Infinity;

  const text = match[1].toLowerCase().trim();

  if (text.includes("one")) return 1;
  if (text.includes("two")) return 2;
  if (text.includes("three")) return 3;
  if (text.includes("four")) return 4;

  const num = parseInt(text);
  return isNaN(num) ? Infinity : num;
}

// Update selected items textarea
function addItemToTextarea(item) {
  let items = selectedItemsTextarea.value ? selectedItemsTextarea.value.split("\n") : [];
  if (!items.includes(item)) {
    items.push(item);
  }
  selectedItemsTextarea.value = items.join("\n");
}

function removeItemFromTextarea(item) {
  let items = selectedItemsTextarea.value ? selectedItemsTextarea.value.split("\n") : [];
  items = items.filter(i => i !== item);
  selectedItemsTextarea.value = items.join("\n");
}