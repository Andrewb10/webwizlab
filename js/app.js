const nav = document.querySelector("#navbar");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//
const showcase = new Swiper(".showcase", {
  loop: true,
  loopAdditionalSlides: 2,
  navigation: {
    clickable: true,
    nextEl: ".showcase_control .swiper-button-next",
    prevEl: ".showcase_control .swiper-button-prev",
  },
  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


// ======== collapse ===========
const projectSection = document.querySelectorAll(".project_section");

if (projectSection) {
    projectSection.forEach((wrapper) => {
        const items = wrapper.querySelectorAll(".project_section .slide");
        const toggleButton = wrapper.querySelector("div .expand_btn");
        const toggleButtonText = wrapper.querySelector("div .expand_btn h5");

        // Initially show the first three items for each slider
        items.forEach((item, index) => {
            if (index < 3) item.classList.add("show");
        });

        toggleButtonText.innerText = `View ${items.length - 3} More`;

        // Track toggle state
        let isExpanded = false;

        toggleButton.addEventListener("click", () => {
            if (isExpanded) {
                // Collapse items, hide all except the first three
                items.forEach((item, index) => {
                    if (index >= 3) item.classList.remove("show");
                });
                toggleButton.classList.remove("active");
                toggleButtonText.innerText = `View ${items.length - 3} More`;
            } else {
                // Expand items, show all
                items.forEach((item) => item.classList.add("show"));
                toggleButton.classList.add("active");
                toggleButtonText.innerText = `Collapse`;
            }

            isExpanded = !isExpanded;
        });
    });
}


// Initialize Swiper
var swiper = new Swiper(".modal_slider1", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".modal_slider2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper3 = new Swiper(".modal_slider3", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Modal Slider
function modalSlide(element, id) {
    if (swiper && typeof id === "number") {
        swiper.slideTo(id); // Go to the specified slide (id starts from 0)
    }
    if (swiper2 && typeof id === "number") {
        swiper2.slideTo(id); // Go to the specified slide (id starts from 0)
    }
    if (swiper3 && typeof id === "number") {
        swiper3.slideTo(id); // Go to the specified slide (id starts from 0)
    }
}

// menu
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#navbar a");

  // Function to update the active link based on the URL hash
  const updateActiveLink = () => {
    const hash = window.location.hash; // Get current hash from the URL
    links.forEach(link => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Add click event listener to each link
  links.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      window.location.hash = targetId; // Update URL hash
      updateActiveLink(); // Update active link
    });
  });

  // Call updateActiveLink on page load to highlight the active link
  updateActiveLink();

  // Listen for hash changes to update the active link dynamically
  window.addEventListener("hashchange", updateActiveLink);
});
