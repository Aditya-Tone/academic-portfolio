// Smooth reveal animation for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const hiddenElements = document.querySelectorAll(
  '.timeline-item, .gallery-card, .certificate-card, .stat-card, .contact-links a'
);

hiddenElements.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});

// Floating effect for profile image orbit icons
const icons = document.querySelectorAll('.icon');

window.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  icons.forEach((icon, index) => {
    icon.style.transform = `translate(${x * (index + 1)}px, ${y * (index + 1)}px)`;
  });
});

// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5, 10, 30, 0.9)';
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = 'rgba(10, 10, 30, 0.45)';
    navbar.style.boxShadow = 'none';
  }
});

// Extra classes used by reveal animation
const style = document.createElement('style');
style.innerHTML = `
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}
`;

document.head.appendChild(style);
