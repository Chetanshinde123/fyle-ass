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


// ----------- Why WE ARE BEST --------------------------------

// Default image
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


// - Function for Hovering Effect 


// document.querySelectorAll(".rect").forEach(rect => {
//   rect.addEventListener("mouseover", () => {
//     const newImage = rect.getAttribute("data-image");
//     document.getElementById("project-img").src = newImage;

//     document
//       .querySelectorAll(".rect")
//       .forEach(r => r.classList.remove("activeProject"));
//     rect.classList.add("activeProject");
//   });
// });



// --- Continuesly Changing Function  

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

// Set to Change the image every 2 seconds
setInterval(updateImage, 2500);



// ---------------------- Slider -------------------------

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

  // radios.forEach((radio, idx) => {
  //     radio.addEventListener('click', () => {
  //         carousel.scrollLeft = idx * 3 * firstCardWidth;
  //     });
  // });
});
