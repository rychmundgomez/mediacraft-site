const themeToggle = document.getElementById('themeToggle');

function getIcon(theme) {
  return theme === 'dark' ? `
    <!-- Moon Icon -->
    <svg viewBox="0 0 24 24"><path d="M21.75 15.5a9.75 9.75 0 0 1-12.9-12.9A10 10 0 1 0 21.75 15.5z"/></svg>
  ` : `
    <!-- Sun Icon -->
    <svg viewBox="0 0 24 24"><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0 4v-2m0-16v2m8 8h-2M6 12H4m15.07 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m0 14.14l1.41-1.41M19.07 4.93l-1.41 1.41"/></svg>
  `;
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.innerHTML = getIcon(next);
}

// Load saved theme + apply icon
(function () {
  const saved = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", saved);
  themeToggle.innerHTML = getIcon(saved);
})();
