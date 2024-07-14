$(document).ready(function() {
  $("#contactUsBtn").click(function() {
    $("#contactModal").modal("show");
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", formSubmit);

  function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/bejyjdoa", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        console.log(response);
        form.reset();
      })
      .catch(error => console.log(error));
  }
});

// Handle form submissio

// script.js
document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  const indicators = document.querySelectorAll(".indicator");

  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", function() {
      moveToNextItem();
    });

  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", function() {
      moveToPrevItem();
    });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      moveToIndex(index);
    });
  });

  function updateIndicators() {
    indicators.forEach(indicator => indicator.classList.remove("active"));
    indicators[currentIndex].classList.add("active");
  }

  function moveToNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function moveToPrevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  function moveToIndex(index) {
    currentIndex = index;
    updateCarousel();
  }

  function updateCarousel() {
    const offset = currentIndex * -33.33;
    document.querySelector(
      ".carousel-inner"
    ).style.transform = `translateX(${offset}%)`;
    updateIndicators();
  }
});

// Set default image
document.getElementById("project-img").src = "assets/image.png";

// Add event listeners for click events
document.querySelectorAll(".rect").forEach(rect => {
  rect.addEventListener("click", () => {
    const newImageSrc = rect.getAttribute("data-image");
    document.getElementById("project-img").src = newImageSrc;

    // Remove activeProject class from all rects and add to the clicked one
    document
      .querySelectorAll(".rect")
      .forEach(r => r.classList.remove("activeProject"));
    rect.classList.add("activeProject");
  });
});

document.querySelectorAll(".rect").forEach(rect => {
  rect.addEventListener("mouseover", () => {
    const newImage = rect.getAttribute("data-image");
    document.getElementById("project-img").src = newImage;

    document
      .querySelectorAll(".rect")
      .forEach(r => r.classList.remove("activeProject"));
    rect.classList.add("activeProject");
  });
});


const rects = document.querySelectorAll(".rect");
let currentIndex = 0;

function updateImage() {
  const rect = rects[currentIndex];
  const newImage = rect.getAttribute("data-image");
  document.getElementById("project-img").src = newImage;

  rects.forEach(react => react.classList.remove("activeProject"));
  rect.classList.add("activeProject");

  currentIndex = (currentIndex + 1) % rects.length; // Loop back to the first element
}

// Initial call to set the first image
updateImage();

// Set interval to change the image every 2 seconds
setInterval(updateImage, 2000);





// const breakpoint = {
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200
// };

// const slider = document.getElementById('slider');
// const slides = slider.querySelectorAll('.slide');
// let currentindex = 0;
// let slidesToShow = 1;
// let autoplayInterval;

// // Function to update the number of slides to show based on screen width
// function updateSlidesToShow() {
//   const width = window.innerWidth;
//   if (width >= breakpoint.xl) {
//     slidesToShow = 7;
//   } else if (width >= breakpoint.lg) {
//     slidesToShow = 6;
//   } else if (width >= breakpoint.md) {
//     slidesToShow = 5;
//   } else if (width >= breakpoint.sm) {
//     slidesToShow = 4;
//   } else {
//     slidesToShow = 3;
//   }

//   slides.forEach(slide => {
//     slide.style.minWidth = `${100 / slidesToShow}%`;
//   });
// }

// // Function to move to the next slide
// function nextSlide() {
//   currentindex = (currentindex + slidesToShow) % slides.length;
//   slider.style.transform = `translateX(-${currentindex * (100 / slidesToShow)}%)`;
// }

// // Start autoplay
// function startAutoplay() {
//   autoplayInterval = setInterval(nextSlide, 2000);
// }

// // Stop autoplay
// function stopAutoplay() {
//   clearInterval(autoplayInterval);
// }

// // Initialize the slider
// updateSlidesToShow();
// startAutoplay();

// // Update slides to show on window resize
// window.addEventListener('resize', updateSlidesToShow);

// // Pause autoplay on hover
// slider.addEventListener('mouseenter', stopAutoplay);
// slider.addEventListener('mouseleave', startAutoplay);


// document.addEventListener('DOMContentLoaded', function () {
//   const slider = document.getElementById('slider');
//   const slides = slider.querySelector('.slides');
//   const slideCount = slides.children.length;
//   let index = 0;

//   function showNextSlide() {
//       index = (index + 2) % slideCount;
//       slides.style.transform = `translateX(${-index * 100}%)`;
//   }

//   setInterval(showNextSlide, 3000); // Change slide every 3 seconds
// });

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');
  const slides = slider.querySelector('.slides');
  const slideCount = slides.children.length;
  let index = 0;

  function showNextSlide() {
      index = (index + 1) % slideCount;
      slides.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});


// ---------------------- Slider --------------------------

// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if(carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);


document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const radios = document.querySelectorAll('.radio-buttons input');
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const carouselChildrens = [...carousel.children];

  let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth - firstCardWidth; // Adjusted to start from the first set of images
  carousel.classList.remove("no-transition");

  const updateRadioButtons = () => {
      const currentIndex = Math.round(carousel.scrollLeft / firstCardWidth);
      const radioIndex = Math.floor(currentIndex / 2) % radios.length;
      radios.forEach((radio, idx) => {
          radio.checked = idx === radioIndex;
      });
  };

  const showNextSlide = () => {
      carousel.scrollLeft += firstCardWidth;
      updateRadioButtons();
  };

  const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
  };

  const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
          carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.offsetWidth - firstCardWidth; // Adjusted to start from the first set of images
          carousel.classList.remove("no-transition");
      }
      updateRadioButtons();
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
  };

  const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(showNextSlide, 2500);
  };

  autoPlay();

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  radios.forEach((radio, idx) => {
      radio.addEventListener('click', () => {
          carousel.scrollLeft = idx * 3 * firstCardWidth;
      });
  });
});
