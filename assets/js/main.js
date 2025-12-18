// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");

    // Re-trigger animation on open
    if (!isHidden) {
      mobileMenu.classList.remove("animate-fade-in-down");
      // Force reflow to restart CSS animation
      void mobileMenu.offsetWidth;
      mobileMenu.classList.add("animate-fade-in-down");
    }

    mobileMenuButton.setAttribute("aria-expanded", String(!isHidden));
  });
}

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;

    navbar.classList.toggle("shadow-lg", scrolled);

    // Ensure we don't keep both background variants at once
    navbar.classList.toggle("bg-midnight/98", scrolled);
    navbar.classList.toggle("bg-midnight/95", !scrolled);
  });
}

// Process Tabs Logic
const tabs = document.querySelectorAll(".process-tab");
const contents = document.querySelectorAll(".schema-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((c) => c.classList.remove("active"));

    const targetId = tab.getAttribute("data-target");
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    target.classList.add("active");
  });
});
