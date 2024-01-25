// Get the header element
var header = document.getElementById("secondary-nav");

// Get the offset position of the header
var sticky = header.offsetTop;

// Function to add or remove the "sticky" class based on scroll position
function handleScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add event listener to the window's scroll event
window.addEventListener("scroll", handleScroll);