const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const icons = document.querySelectorAll("i");

hamburger.addEventListener("click", function (event) {
    const isVisible = navLinks.getAttribute('data-visible');
    if (isVisible == "true") {
        navLinks.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");
    } else if (isVisible == "false") {
        navLinks.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");

    }
});