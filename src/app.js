const hamburgerButton = document.getElementById('hamburger-icon')
const navLinks = document.getElementById('nav-links')

function toggleButton() {
    navLinks.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)