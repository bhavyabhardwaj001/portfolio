const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");
const header = document.querySelector("#siteHeader");
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-alabel", "Open navigation menu");
  });
});

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.01,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const canvas = document.querySelector("#starsCanvas");
const ctx = canvas.getContext("2d");
let stars = [];
let animationFrame;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const resizeCanvas = () => {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const starCount = Math.min(170, Math.floor((window.innerWidth * window.innerHeight) / 8200));
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.2 + 0.25,
    alpha: Math.random() * 0.55 + 0.2,
    speed: Math.random() * 0.12 + 0.02,
  }));
};

const drawStars = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(246, 242, 255, ${star.alpha})`;
    ctx.fill();

    if (!prefersReducedMotion) {
      star.y += star.speed;
      if (star.y > window.innerHeight + 4) {
        star.y = -4;
        star.x = Math.random() * window.innerWidth;
      }
    }
  });

  animationFrame = window.requestAnimationFrame(drawStars);
};

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawStars();

window.addEventListener("beforeunload", () => {
  window.cancelAnimationFrame(animationFrame);
});

// 3D Hover Effect for Project Cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set glow position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Calculate rotation (max rotation 10 degrees)
    if (!prefersReducedMotion) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    }
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  });
});
