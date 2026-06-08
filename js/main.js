// ─── COFI TRADERS — Shared JS ───

// Language system
function setLang(lang) {
  const body = document.getElementById('body');
  if (lang === 'es') {
    body.classList.add('es');
  } else {
    body.classList.remove('es');
  }
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnEs) btnEs.classList.toggle('active', lang === 'es');
  localStorage.setItem('cofi-lang', lang);
}

// Init language
const saved = localStorage.getItem('cofi-lang');
if (saved) {
  setLang(saved);
} else {
  const browserLang = navigator.language || navigator.userLanguage || '';
  setLang(browserLang.toLowerCase().startsWith('es') ? 'es' : 'en');
}

// Mobile nav toggle
function toggleNav() {
  const menu = document.getElementById('nav-mobile');
  if (menu) menu.classList.toggle('open');
}

// Mark active nav link
(function() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-center a, .nav-mobile a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.endsWith(href.replace(/^\//, ''))) {
      link.classList.add('active');
    }
    if (href === '/' && (path === '/' || path === '/index.html')) {
      link.classList.add('active');
    }
  });
})();

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<span>Sending…</span>';

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
  .then(() => {
    btn.innerHTML = '<span>✓ Sent →</span>';
    form.reset();
    setTimeout(() => {
      btn.innerHTML = '<span class="en-only">Send request</span><span class="es-only">Enviar solicitud</span>';
      btn.disabled = false;
    }, 4000);
  })
  .catch(() => {
    btn.innerHTML = '<span>Error — try again</span>';
    btn.disabled = false;
  });
}
