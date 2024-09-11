// Code to hover over image 1
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer1 = document.querySelector(".image-container1");
  const textContainer1 = document.querySelector(".text-container1");

  imageContainer1.addEventListener("mouseenter", function () {
    textContainer1.classList.add("active");
  });

  imageContainer1.addEventListener("mouseleave", function () {
    textContainer1.classList.remove("active");
  });
});

//code to hover over image 2

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer2 = document.querySelector(".image-container2");
  const textContainer2 = document.querySelector(".text-container2");

  imageContainer2.addEventListener("mouseenter", function () {
    textContainer2.classList.add("active");
  });

  imageContainer2.addEventListener("mouseleave", function () {
    textContainer2.classList.remove("active");
  });
});

//code to hover over image 3

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer3 = document.querySelector(".image-container3");
  const textContainer3 = document.querySelector(".text-container3");

  imageContainer3.addEventListener("mouseenter", function () {
    textContainer3.classList.add("active");
  });

  imageContainer3.addEventListener("mouseleave", function () {
    textContainer3.classList.remove("active");
  });
});

//code to hover over image 4

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer4 = document.querySelector(".image-container4");
  const textContainer4 = document.querySelector(".text-container4");

  imageContainer4.addEventListener("mouseenter", function () {
    textContainer4.classList.add("active");
  });

  imageContainer4.addEventListener("mouseleave", function () {
    textContainer4.classList.remove("active");
  });
});