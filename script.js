/* ═══════════════════════════════════════
   PORTFOLIO WEBSITE — script.js
   ═══════════════════════════════════════ */



/* ── Dark Mode Toggle ───────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const DARK_KEY    = 'portfolio-theme';

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeToggle.innerHTML = theme === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem(DARK_KEY, theme);
}
applyTheme(localStorage.getItem(DARK_KEY) || 'light');
themeToggle.addEventListener('click', () =>
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
);const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveal.classList.add("active");
    }

  });
});

/* ── Skill Bar Animation ───────────────────── */
const skillBars = document.querySelectorAll(".bar-fill");

skillBars.forEach(bar => {
  const width = bar.getAttribute("data-width");
  bar.style.width = width + "%";
});