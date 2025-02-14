let menu = document.querySelector(".nav-links");
function toggleMenu() {
  // Toggle inline style if header is not scrolled (for mobile usage)
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header");
  
  window.addEventListener("scroll", function() {
    // Log current scrollY for debugging
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

function scrollDown() {
  smoothScrollTo(window.innerHeight, 500);
}

let scrollAnimationFrameId = null;
let isAutoScrolling = false;

function smoothScrollTo(target, duration) {
  const start = window.scrollY;
  const change = target - start;
  const startTime = performance.now();
  isAutoScrolling = true;
  
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    window.scrollTo(0, start + change * easedProgress);
    if (elapsed < duration && isAutoScrolling) {
      scrollAnimationFrameId = requestAnimationFrame(animateScroll);
    } else {
      isAutoScrolling = false;
      scrollAnimationFrameId = null;
    }
  }
  
  scrollAnimationFrameId = requestAnimationFrame(animateScroll);
}

function cancelSmoothScroll() {
  if (scrollAnimationFrameId) {
    cancelAnimationFrame(scrollAnimationFrameId);
    scrollAnimationFrameId = null;
    isAutoScrolling = false;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Only enable auto-scroll on the home page.
  if (!document.body.classList.contains("home-page")) return;
  
  window.addEventListener("wheel", function(e) {
    // If a manual scroll occurs during auto-scroll, cancel the smooth animation.
    if (isAutoScrolling) {
      cancelSmoothScroll();
      return; // Let the browser handle the wheel event normally.
    }
    // Only auto-scroll if scrolling down and within the first viewport
    if (e.deltaY > 0 && window.scrollY < window.innerHeight) {
      e.preventDefault();
      smoothScrollTo(window.innerHeight, 500);
    }
  }, { passive: false });
});
// Submit button
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  const thanksContainer = document.querySelector('.thanks-msg-container');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission

    // Optionally check that required fields are filled (the browser should enforce this via "required" attributes)

    // Add the "submit" class to the thanks message container to trigger the CSS animation
    thanksContainer.classList.add('submit');

    // Prepare the form data
    const formData = new FormData(contactForm);

    // Send the form via AJAX
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally remove the popup after a delay
        setTimeout(() => {
          thanksContainer.classList.remove('submit');
        }, 5000);
      } else {
        console.error('Error sending email');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});