/* Nowen portfolio: site interactions. Dependencies: Typed.js + Lucide (CDN) */
(function () {
  'use strict';
  const readingProgress = document.querySelector('.reading-progress');
  if (readingProgress) {
    let scheduled = false;
    const updateProgress = () => {
      const page = document.documentElement;
      const distance = page.scrollHeight - page.clientHeight;
      const progress = distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0;
      readingProgress.style.transform = `scaleX(${progress})`;
      scheduled = false;
    };
    const scheduleProgress = () => {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(updateProgress);
      }
    };
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress);
    window.addEventListener('load', scheduleProgress);
    window.addEventListener('pageshow', scheduleProgress);
    // Disclosures, image loads, and font changes can alter the page height.
    if (window.ResizeObserver) new ResizeObserver(scheduleProgress).observe(document.body);
    updateProgress();
  }
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const typedElement = document.getElementById('typed-focus');
  if (typedElement && !reducedMotion && window.Typed) {
    // Typed.js prepends existing text and reuses its position on every loop.
    // Clear the static fallback only when animation is available.
    typedElement.textContent = '';
    new Typed('#typed-focus', {
      strings: ['Linux, Docker & infrastructure', 'identity & access management', 'API investigations & automation', 'finding the root cause'],
      typeSpeed: 42,
      backSpeed: 24,
      backDelay: 1800,
      loop: true,
      smartBackspace: false,
      contentType: 'text',
      showCursor: true,
      cursorChar: '▍'
    });
  }
  if (window.lucide) window.lucide.createIcons();

  // Native disclosures support tap and keyboard; mouse hover also reveals coverage.
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') card.open = true;
    });
    card.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse' && !card.contains(document.activeElement)) card.open = false;
    });
    card.addEventListener('focusout', event => {
      if (!card.contains(event.relatedTarget) && !card.matches(':hover')) card.open = false;
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Escape') card.open = false;
    });
  });

  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Subtle character-hover highlight; specifically requested as a callback to the old nowen.io.
  // Only applied to the main hero title so it doesn't impair readability elsewhere.
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle && !reducedMotion) {
    const walk = document.createTreeWalker(heroTitle, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walk.nextNode()) nodes.push(walk.currentNode);
    nodes.forEach(node => {
      const parent = node.parentElement;
      if (!node.textContent.trim() || (parent && parent.closest('.period'))) return;
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }
        if (!part) return;
        const word = document.createElement('span');
        word.className = 'hover-word';
        [...part].forEach(char => {
          const span = document.createElement('span');
          span.className = 'hover-char';
          span.textContent = char;
          word.appendChild(span);
        });
        fragment.appendChild(word);
      });
      node.parentNode.replaceChild(fragment, node);
    });
  }
})();
