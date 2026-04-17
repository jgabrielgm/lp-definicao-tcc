const EVENT_DETAILS = {
  title: "Apresentação - Definição de Tema de TCC",
  dateLabel: "25 de abril de 2026, das 11h às 12h, online",
  icsPath: "./assets/definir-tcc.ics",
};

function bindSmoothScroll() {
  const hashLinks = document.querySelectorAll('a[href^="#"]');

  hashLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        history.replaceState(null, "", targetId);
      } catch (error) {
        window.location.hash = targetId;
      }
    });
  });
}

function hydrateEventCopy() {
  document.querySelectorAll("[data-event-title]").forEach((node) => {
    node.textContent = EVENT_DETAILS.title;
  });

  document.querySelectorAll("[data-event-date]").forEach((node) => {
    node.textContent = EVENT_DETAILS.dateLabel;
  });
}

function triggerIcsDownload() {
  const link = document.createElement("a");
  link.href = EVENT_DETAILS.icsPath;
  link.download = "definir-tcc.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function bindCalendarConfirmation() {
  const confirmButton = document.querySelector("#confirm-form");
  const confirmationCard = document.querySelector("#calendar-confirmation");
  const manualLink = document.querySelector("#ics-link");

  if (!confirmButton || !confirmationCard || !manualLink) {
    return;
  }

  manualLink.href = EVENT_DETAILS.icsPath;

  confirmButton.addEventListener("click", () => {
    confirmationCard.classList.remove("is-hidden");
    triggerIcsDownload();
    confirmButton.disabled = true;
    confirmButton.textContent = "Convite liberado";
    confirmationCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateEventCopy();
  bindSmoothScroll();
  bindCalendarConfirmation();
});
