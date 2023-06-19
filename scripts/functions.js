function historySpam() {
  for (let i = 0; i < 50; i++) {
    window.history.pushState({}, "", location.pathname);
  }
}

function openNewWindow() {
  window.open(location.href, "_blank");
}

function addListeners() {
  arrLinks.forEach((a) => {
    a.addEventListener("click", () => {
      stop = true;
    });
  });
}

function init() {
  historySpam();
  addListeners();
}
