/* ===========================
   ANA CLARA — BOOTSTRAP VERSION
   script.js
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // 1. THEME TOGGLE (Claro / Escuro)
  // ─────────────────────────────────────────
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  let isDark = false;

  // Verifica preferência salva no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark = true;
    applyTheme(true);
  }

  themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  function applyTheme(dark) {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeIcon.className = dark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    themeLabel.textContent = dark ? 'Claro' : 'Escuro';
  }

  // ─────────────────────────────────────────
  // 2. SCROLL FADE-IN com IntersectionObserver
  // ─────────────────────────────────────────
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay escalonado para elementos do mesmo grupo
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // ─────────────────────────────────────────
  // 3. SMOOTH SCROLL para links internos
  // ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Fecha o menu mobile após clicar (Bootstrap)
        const navMenu = document.getElementById('navMenu');
        if (navMenu.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });

  // ─────────────────────────────────────────
  // 4. NAVBAR — muda estilo ao rolar
  // ─────────────────────────────────────────
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // ─────────────────────────────────────────
  // 5. ACTIVE NAV LINK ao rolar (ScrollSpy manual)
  // ─────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

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
      link.classList.remove('active-nav');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-nav');
      }
    });
  });

});
