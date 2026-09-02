/* ---------------- Header scroll state ---------------- */
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------- Mobile nav toggle ---------------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ---------------- Active nav link ---------------- */
(() => {
  const folderName = (path) => {
    const parts = path.split('?')[0].split('/').filter(Boolean);
    if (parts[parts.length - 1] === 'index.html') parts.pop();
    return parts[parts.length - 1] || 'home';
  };
  const current = folderName(location.pathname);
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && folderName(href) === current) a.classList.add('active');
  });
})();

/* ---------------- Reveal on scroll ---------------- */
const revealEls = document.querySelectorAll('.reveal, .g-item');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

/* ---------------- Lightbox gallery ---------------- */
(() => {
  const galleryLinks = Array.from(document.querySelectorAll('.gallery a'));
  if (!galleryLinks.length) return;

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.4"/></svg>
    </button>
    <button class="lightbox-prev" aria-label="Previous">
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M9 1L2 8L9 15" stroke="currentColor" stroke-width="1.4"/></svg>
    </button>
    <img alt="">
    <button class="lightbox-next" aria-label="Next">
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M1 1L8 8L1 15" stroke="currentColor" stroke-width="1.4"/></svg>
    </button>
    <div class="lightbox-count"></div>
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');
  const lbCount = lb.querySelector('.lightbox-count');
  let idx = 0;

  const show = (i) => {
    idx = (i + galleryLinks.length) % galleryLinks.length;
    const href = galleryLinks[idx].getAttribute('href');
    lbImg.src = href;
    lbCount.textContent = `${idx + 1} / ${galleryLinks.length}`;
  };

  const open = (i) => {
    show(i);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };

  galleryLinks.forEach((a, i) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      open(i);
    });
  });

  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lightbox-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
})();
