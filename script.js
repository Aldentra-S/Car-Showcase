// Auto-close mobile navigation drawer on link click & click outside
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navToggle && navToggle.checked) {
      navToggle.checked = false;
    }
  });
});

document.addEventListener('click', (e) => {
  if (navToggle && navToggle.checked && !navbar.contains(e.target)) {
    navToggle.checked = false;
  }
});

// ScrollSpy active link highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const targetLink = document.querySelector(`.nav-links a[href*='${sectionId}']`);

    if (targetLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        targetLink.classList.add('active');
      } else {
        targetLink.classList.remove('active');
      }
    }
  });
});
