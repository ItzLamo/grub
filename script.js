function playRockSound() {
    const audio = document.getElementById('rockSound');
    if (audio) {
        audio.currentTime = 0;  // Start from the beginning
        audio.play()  // Play the sound
            .catch(error => console.log('Error playing sound:', error));
    }
}


function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('adoptionForm');
    if (form) {
        // In a real app, you would send this data to a server
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = 'Thank you for your application! We\'ll review it and get back to you soon.';
        document.body.appendChild(message);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);
        
        // Reset form
        form.reset();
    }
}

// Gallery filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
