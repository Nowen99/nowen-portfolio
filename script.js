/* Nowen portfolio: site interactions. Dependencies: Typed.js + Lucide (CDN) */
(function () {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const typedElement = document.getElementById('typed-focus');
  if (typedElement && !reducedMotion && window.Typed) {
    new Typed('#typed-focus', {
      strings: ['Linux, Docker & infrastructure', 'identity & access management', 'API investigations & automation', 'finding the root cause'],
      typeSpeed: 42,
      backSpeed: 24,
      backDelay: 1800,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '▍'
    });
  }
  if (window.lucide) window.lucide.createIcons();

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
      [...node.textContent].forEach(char => {
        if (char === ' ') fragment.appendChild(document.createTextNode(' '));
        else {
          const span = document.createElement('span');
          span.className = 'hover-char';
          span.textContent = char;
          fragment.appendChild(span);
        }
      });
      node.parentNode.replaceChild(fragment, node);
    });
  }
  // Placeholder links intentionally non-functional until personal contact details are added.
  document.querySelectorAll('[data-placeholder-link]').forEach(el => {
    el.addEventListener('click', event => {
      if (el.getAttribute('href') === 'mailto:YOUR_EMAIL@example.com' || el.getAttribute('href') === 'https://www.linkedin.com/') {
        event.preventDefault();
        alert('Add your contact link in index.html before publishing your portfolio.');
      }
    });
  });
})();
