
let menu = document.querySelector(".nav-links");
function toggleMenu() {
    // Toggle inline style if header is not scrolled (for mobile usage)
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header");
  
  window.addEventListener("scroll", function() {
    console.log(this.window.scrollY);
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      
    } else {
      header.classList.remove("scrolled");
    }
  });
});


/* Scroll function*/
function scrollDown() {
  smoothScrollTo(window.innerHeight, 1000);
}
document.addEventListener("DOMContentLoaded", function() {
  // Check if the body has the class 'home-page'
  if (!document.body.classList.contains("home-page")) return;
  
  let autoScrollTriggered = false;
  
  window.addEventListener("wheel", function(e) {
    // Only auto-scroll if scrolling down (e.deltaY > 0) and within the first viewport
    if (e.deltaY > 0 && !autoScrollTriggered && window.scrollY < window.innerHeight) {
      autoScrollTriggered = true;
      e.preventDefault();
      smoothScrollTo(window.innerHeight, 1000);
      setTimeout(() => { autoScrollTriggered = false; }, 1100);
    }
  }, { passive: false });
});

// Smooth scroll function remains the same:
function smoothScrollTo(target, duration) {
  const start = window.scrollY;
  const change = target - start;
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    window.scrollTo(0, start + change * easedProgress);
    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
}