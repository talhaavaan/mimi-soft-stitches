// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    setTimeout(() => document.getElementById('loader').remove(), 1000);
  }, 1500);
});

// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
    cursor.style.background = 'rgba(255,182,193,0.4)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = 'rgba(255,182,193,0.6)';
  });
});

// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(r => obs.observe(r));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

// Floating sparkles
const sc = document.getElementById('sparkleContainer');
function createSparkle() {
  const s = document.createElement('div');
  const symbols = ['✨', '🌸', '💕', '⭐', '🌷', '💫', '✿'];
  s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  s.style.cssText = `position:fixed;left:${Math.random() * 100}vw;top:${Math.random() * 100}vh;font-size:${12 + Math.random() * 16}px;pointer-events:none;z-index:1;opacity:0;transition:opacity 0.5s,transform 2s;`;
  sc.appendChild(s);
  setTimeout(() => {
    s.style.opacity = '0.6';
    s.style.transform = `translateY(-${30 + Math.random() * 60}px)`;
  }, 50);
  setTimeout(() => { s.style.opacity = '0'; }, 2000);
  setTimeout(() => s.remove(), 2500);
}
setInterval(createSparkle, 1800);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
