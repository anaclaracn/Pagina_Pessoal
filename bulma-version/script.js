/* ===========================
   ANA CLARA — BULMA VERSION
   script.js
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // 1. BURGER MENU (Bulma não tem JS próprio)
  // ─────────────────────────────────────────
  const burger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.navbar-item[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    });
  });

  // ─────────────────────────────────────────
  // 2. THEME TOGGLE (Claro / Escuro)
  // ─────────────────────────────────────────
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  let isDark = false;

  // Verifica preferência salva no localStorage
  const savedTheme = localStorage.getItem('theme-bulma');
  if (savedTheme === 'dark') {
    isDark = true;
    applyTheme(true);
  }

  themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem('theme-bulma', isDark ? 'dark' : 'light');
  });

  function applyTheme(dark) {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
    themeLabel.textContent = dark ? 'Claro' : 'Escuro';
  }

  // ─────────────────────────────────────────
  // 3. SCROLL REVEAL com IntersectionObserver
  // ─────────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('shown');
        }, index * 120);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ─────────────────────────────────────────
  // 4. SMOOTH SCROLL para links internos
  // ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const navHeight = document.querySelector('.site-nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ─────────────────────────────────────────
  // 5. NAVBAR — muda estilo ao rolar
  // ─────────────────────────────────────────
  const navbar = document.querySelector('.site-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // ─────────────────────────────────────────
  // 6. ACTIVE NAV LINK ao rolar (ScrollSpy)
  // ─────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-item[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    const navHeight = navbar.offsetHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 20;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--accent)';
      }
    });
  });

});
