const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const sunIconMobile = document.getElementById("sun-icon-mobile");
const moonIconMobile = document.getElementById("moon-icon-mobile");
const html = document.documentElement;

function updateIcons(isDark) {
  if (isDark) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    sunIconMobile.style.display = "block";
    moonIconMobile.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    sunIconMobile.style.display = "none";
    moonIconMobile.style.display = "block";
  }
}

function toggleTheme() {
  const isDark = html.classList.contains("dark");
  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    updateIcons(false);
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateIcons(true);
  }
}

// Initialize theme
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "light") {
  html.classList.remove("dark");
  updateIcons(false);
} else if (savedTheme === "dark" || prefersDark) {
  html.classList.add("dark");
  updateIcons(true);
}

themeToggle.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");
  if (isOpen) {
    mobileMenu.classList.remove("open");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    mobileMenu.classList.add("open");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const footerDate = document.getElementById("footer-date");
footerDate.textContent = `©${new Date().getFullYear()} Imad K`;
footerDate.style.wordSpacing = "1px";
