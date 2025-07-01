// Function to show a message box
function showMessageBox(message, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    messageBox.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336'; // Green for success, Red for error

    // Apply fade-in animation
    messageBox.style.animation = 'fadeIn 0.5s forwards';

    setTimeout(() => {
        // Apply fade-out animation before hiding
        messageBox.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 500); // Hide after fade-out completes
    }, 3000); // Message disappears after 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('hidden');
            mainNav.classList.toggle('flex');
        });
    }

    // Set active navigation link based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Handle cases for index.html (empty path or 'index.html')
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Specific logic for login form (only on login.html)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const email = document.getElementById('email-address').value;
            const password = document.getElementById('password').value;

            // Simple validation (replace with actual authentication logic)
            if (email === 'user@example.com' && password === 'password123') {
                showMessageBox('Login Berhasil!', 'success');
                // Optionally, redirect after successful login
                // window.location.href = 'index.html';
            } else {
                showMessageBox('Email atau kata sandi salah.', 'error');
            }
        });
    }
});
