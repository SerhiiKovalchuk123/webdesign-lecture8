const planButtons = document.querySelectorAll("[data-plan]");
const status = document.querySelector("#selection-status");

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    planButtons.forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    status.textContent = `Вибрано пакет «${button.dataset.plan}».`;
  });
});
