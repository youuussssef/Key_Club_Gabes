document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Sending the email using a backend service like EmailJS or Formspree
    fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email, message }),
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('contact-form').reset(); // Clear the form
            document.getElementById('response-message').style.display = 'block'; // Show success message
        } else {
            alert('There was a problem sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again.');
    });
});
document.getElementById("executive-board-photo").onclick = function() {
    this.classList.toggle("enlarged");
};
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.news-slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.news-slide');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide
showSlide(currentIndex);
