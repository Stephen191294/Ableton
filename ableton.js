// get the secondary-nav
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

document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('open');
  document.getElementById('menu-toggle').classList.toggle('open');
  document.getElementById('close-button').classList.toggle('open');
});

document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('menu').classList.remove('open');
  document.getElementById('menu-toggle').classList.remove('open');
  document.getElementById('close-button').classList.remove('open');
});

function playVideo() {
  document.getElementById('video-player').src += '&autoplay=1'; // Auto play the video
  document.getElementsByClassName('thumbnail')[0].style.display = 'none'; // Hide the thumbnail image
}