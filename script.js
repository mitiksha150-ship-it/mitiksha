// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // ================= AOS INIT =================
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });

  // ================= MOBILE MENU =================
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll("#nav a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("active"));
    });
  }

  // ================= TYPING EFFECT =================
  const typingEl = document.querySelector(".typing");
  const text = "Web Developer | UI Designer | Creator";
  let i = 0;

  function typing() {
    if (typingEl && i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 60);
    }
  }

  typing();
});