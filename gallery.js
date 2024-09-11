// This code selects the first element with the class "img_container" and stores it in a variable named img_container.
const img_container = document.querySelector(".img-container");
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
const viewMoreButtons = document.querySelectorAll(".view-more");
const closeButtons = document.querySelectorAll(".close-button");

// Drag Functionality
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

// Function to start the drag operation
const DragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = img_container.scrollLeft;
};

// Function to handle dragging
const dragging = (e) => {
  if (!isDragStart) return;
  let position = e.pageX - prevPageX;
  img_container.scrollLeft = prevScrollLeft - position;
};

// Function to stop the drag operation
const dragStop = () => {
  isDragStart = false;
};

// Function to handle right arrow click
const rightArrowClick = (e) => {
  img_container.scrollLeft += 300;
  // Show or hide arrows based on scroll position
  if (img_container.scrollLeft > 0) {
    leftArrow.style.display = "flex";
  }
  if (
    img_container.scrollLeft + img_container.clientWidth + 1 >=
    img_container.scrollWidth
  ) {
    rightArrow.style.display = "none";
  }
  console.log(img_container.scrollLeft + img_container.clientWidth);
  console.log(img_container.scrollWidth);
};

// Function to handle left arrow click
const leftArrowClick = (e) => {
  img_container.scrollLeft -= 300;
  // Show or hide arrows based on scroll position
  if (img_container.scrollLeft === 0) {
    leftArrow.style.display = "none";
  }
  if (
    img_container.scrollLeft + img_container.clientWidth <=
    img_container.scrollWidth
  ) {
    rightArrow.style.display = "flex";
  }
};
// Called when a mouse button is pressed down over an element
// Called when the mouse is moved over an element
img_container.addEventListener("mousedown", DragStart);
img_container.addEventListener("mousemove", dragging);
// Called when a mouse button is released after being pressed down over an element
img_container.addEventListener("mouseup", dragStop);
rightArrow.addEventListener("click", rightArrowClick);
leftArrow.addEventListener("click", leftArrowClick);
// Initially hide the left arrow
leftArrow.style.display = "none";

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const bgColorInput = document.getElementById("bg-color");
  const fontColorInput = document.getElementById("font-color");
  const fontFamilySelect = document.getElementById("font-family");

  const galleryContainer = document.querySelector(".popup-image-wrapper");

  // Event listener for background color input changes
  bgColorInput.addEventListener("change", function () {
    galleryContainer.style.backgroundColor = bgColorInput.value;
  });
  // Update the font color of the gallery container
  fontColorInput.addEventListener("change", function () {
    galleryContainer.style.color = fontColorInput.value;
  });
  // Event listener for font family select changes
  fontFamilySelect.addEventListener("change", function () {
    galleryContainer.style.fontFamily = fontFamilySelect.value;
  });
});
// Function to display the popup image and its details
const popupImage = (id) => {
  // Get the image source, header, and description from the clicked element
  const imageSrc = document.getElementById(id).querySelector(".image").src;
  const header = document
    .getElementById(id)
    .querySelector(".img_title").innerHTML;
  const description = document
    .getElementById(id)
    .querySelector(".img_description").innerHTML;

  // Show the popup container
  document.querySelector(".popup-image-veil").classList.add("display-popup");

  // Set the popup image source, header, and description
  document.getElementById("popup-img").src = imageSrc;
  document.getElementById("popup-header").innerHTML = header;
  document.getElementById("popup-description").innerHTML = description;
};

// Function to hide the popup
const hidePopup = () => {
  // Hide the popup container
  document.querySelector(".popup-image-veil").classList.remove("display-popup");
};
