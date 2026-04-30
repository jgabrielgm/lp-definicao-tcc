const EVENT_DATE_TEXT = "Evento gratuito! Dia 16 de maio de 2026, das 11h \u00e0s 12h - via Zoom";

function syncEventDate() {
  const eventDateElements = document.querySelectorAll("[data-event-date]");

  eventDateElements.forEach((element) => {
    element.textContent = EVENT_DATE_TEXT;
  });
}

document.addEventListener("DOMContentLoaded", syncEventDate);
