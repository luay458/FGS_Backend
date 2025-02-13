function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    // Toggle inline style if header is not scrolled (for mobile usage)
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log("Hi");
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}