// Main Window Title Animations
(function () {
  const title = document.getElementById("app-title");
  const subtitle = document.getElementById("app-subtitle");
  setTimeout(() => {
    subtitle.classList.remove("delay");
    subtitle.classList.remove("slide-up-fade");
    title.classList.add("fade-mid-top");
    subtitle.classList.add("fade-mid-top");
    subtitle.classList.add("fade-out");
    setTimeout(() => {
      title.classList.remove("slide-up-fade");
      title.classList.remove("fade-mid-top");
      subtitle.remove();
    }, 1200);
  }, 3000);
})();
