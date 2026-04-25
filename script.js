const EVENT_DATE_TEXT = "Evento gratuito! Dia 25 de abril de 2026, das 11h \u00e0s 12h - via Zoom";

function syncEventDate(root = document) {
  const eventDateElements = root.querySelectorAll("[data-event-date]");

  eventDateElements.forEach((element) => {
    element.textContent = EVENT_DATE_TEXT;
  });
}

function initializePage() {
  syncEventDate();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  initializePage();
}
