// Background slideshow functionality
const images = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;

function nextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Change image every 5 seconds
setInterval(nextImage, 5000);

// Add button click functionality
document.querySelector('.enter_button').addEventListener('click', function() {
    // Add your navigation logic here
    // window.location.href = 'dashboard.html';
});

function redirectToOtherPage() {
    // Replace 'otherpage.html' with the path to your desired HTML file
    window.location.href = "secondpage.html";
}