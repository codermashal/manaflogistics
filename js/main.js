/* ==========================================================
   main.js — Bootstrap: preloader + shared helpers
   ========================================================== */
(function () {
  /* Toast helper (used by forms.js) */
  const toast = document.getElementById("toast");
  let timer;
  window.ManafToast = function (msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove("show"); }, 4200);
  };

  /* Preloader */
  const pre = document.getElementById("preloader");
  function hide() { if (pre) pre.classList.add("is-done"); }
  window.addEventListener("load", function () { setTimeout(hide, 350); });
  setTimeout(hide, 3500); // safety net if an image is slow

  /* Offset smooth-scroll when arriving with a hash */
  window.addEventListener("hashchange", function () {
    const el = location.hash.length > 1 && document.querySelector(location.hash);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  });
})();
