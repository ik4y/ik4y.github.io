// const themeToggle = document.getElementById("theme-toggle");
// const themeToggleMobile = document.getElementById("theme-toggle-mobile");
// const sunIcon = document.getElementById("sun-icon");
// const moonIcon = document.getElementById("moon-icon");
// const sunIconMobile = document.getElementById("sun-icon-mobile");
// const moonIconMobile = document.getElementById("moon-icon-mobile");
const html = document.documentElement;

// function updateIcons(isDark) {
//   if (isDark) {
//     sunIcon.style.display = "block";
//     moonIcon.style.display = "none";
//     sunIconMobile.style.display = "block";
//     moonIconMobile.style.display = "none";
//   } else {
//     sunIcon.style.display = "none";
//     moonIcon.style.display = "block";
//     sunIconMobile.style.display = "none";
//     moonIconMobile.style.display = "block";
//   }
// }

// function toggleTheme() {
//   const isDark = html.classList.contains("dark");
//   if (isDark) {
//     html.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//     updateIcons(false);
//   } else {
//     html.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     updateIcons(true);
//   }
// }

// // Initialize theme
// const savedTheme = localStorage.getItem("theme");
// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (savedTheme === "light") {
//   html.classList.remove("dark");
//   updateIcons(false);
// } else if (savedTheme === "dark" || prefersDark) {
//   html.classList.add("dark");
//   updateIcons(true);
// }

// themeToggle.addEventListener("click", toggleTheme);
// themeToggleMobile.addEventListener("click", toggleTheme);

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

async function loadTestimonials() {
  try {
    const response = await fetch("./data/testimonials.json");
    if (!response.ok) {
      throw new Error("Failed to load testimonials");
    }
    const testimonials = await response.json();
    const container = document.getElementById("testimonials-container");

    container.innerHTML = testimonials
      .map(
        (testimonial) => `
      <article class="testimonial-card">
        <svg
          class="quote-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p>
          <q>${testimonial.quote}</q>
        </p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${testimonial.avatar}</div>
          <div>
            <h4 class="font-heading">${testimonial.author}</h4>
            <span>${testimonial.role}</span>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error loading testimonials:", error);
    const container = document.getElementById("testimonials-container");
    container.innerHTML = `<p>Failed to load testimonials.</p>`;
  }
}

// Load testimonials when the page loads
loadTestimonials();

// Load projects from JSON
async function loadProjects() {
  try {
    const response = await fetch("./data/projects.json");
    if (!response.ok) {
      throw new Error("Failed to load projects");
    }
    const projects = await response.json();
    const container = document.getElementById("projects-container");

    container.innerHTML = projects
      .map(
        (project) => `
      <article class="project-card">
        <div class="project-header">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
            <path
              d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div class="project-links">
            ${
              project.github
                ? `<a href="${project.github}" aria-label="GitHub"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg
            ></a>`
                : ""
            }
            ${
              project.external
                ? `<a href="${project.external}" aria-label="External Link"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line></svg
            ></a>`
                : ""
            }
          </div>
        </div>
        <h3 class="font-heading">${project.title}</h3>
        <p>
          ${project.description}
        </p>
        <div class="tags">
          ${project.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}
        </div>
      </article>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error loading projects:", error);
    const container = document.getElementById("projects-container");
    container.innerHTML = `<p>Failed to load projects.</p>`;
  }
}

// Load work experience from JSON
async function loadExperience() {
  try {
    const response = await fetch("./data/experience.json");
    if (!response.ok) {
      throw new Error("Failed to load experience");
    }
    const experiences = await response.json();
    const container = document.getElementById("experience-container");

    container.innerHTML = experiences
      .map(
        (exp) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>${exp.period}</span>
          </div>
          <h3 class="font-heading">${exp.title}</h3>
          <p class="company">${exp.company}</p>
          <ul>
            ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
          </ul>
        </div>
      </div>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error loading experience:", error);
    const container = document.getElementById("experience-container");
    container.innerHTML = `<p>Failed to load work experience.</p>`;
  }
}

// Load blogs from JSON
async function loadBlogs() {
  try {
    const response = await fetch("./data/blogs.json");
    if (!response.ok) {
      throw new Error("Failed to load blogs");
    }
    const blogs = await response.json();
    const container = document.getElementById("blogs-container");

    container.innerHTML = blogs
      .map(
        (blog) => `
      <article class="blog-card">
        <div>
          <div class="blog-meta">
            <span
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              ${blog.date}</span
            >
            <span
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${blog.readTime}</span
            >
          </div>
          <h3 class="font-heading">
            ${blog.title}
          </h3>
          <p>
            ${blog.description}
          </p>
          <div class="tags">
            ${blog.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
        </div>
        <a href="${blog.link}" class="read-more"
          >Read More
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline></svg
        ></a>
      </article>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error loading blogs:", error);
    const container = document.getElementById("blogs-container");
    container.innerHTML = `<p>Failed to load blogs.</p>`;
  }
}

// Load all data when the page loads
loadProjects();
loadExperience();
loadBlogs();
