const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

// Toggle Mobile Menu
const navToggle = () => {
  btn.classList.toggle('open');

  // Check if the menu is currently hidden
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('flex'); // Use flex for visible menu
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('flex'); // Remove flex when hidden
  }
}

// Adding event listener for hamburger button
btn.addEventListener("click", navToggle);

// Close the mobile menu if a link is clicked
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    btn.classList.remove('open'); // Optionally close the hamburger icon as well
  });
});

// Close the mobile menu when resizing to medium or larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // Adjust this value for md breakpoint
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    btn.classList.remove('open'); // Close the hamburger icon as well
  }
});
