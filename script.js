const WHATSAPP_NUMBER = "5493513318844";
const WHATSAPP_MESSAGE =
  "Hola, quiero solicitar presupuesto por servicio técnico para equipamiento gastronómico.";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");

function buildWhatsAppUrl() {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

whatsappLinks.forEach((link) => {
  link.href = buildWhatsAppUrl();
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
