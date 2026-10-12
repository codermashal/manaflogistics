/* ==========================================================
   nav.js — Sticky header, mobile menu, active link, scroll UI
   ========================================================== */
(function () {
  const topbar = document.getElementById("topbar");
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("primaryMenu");
  const toTop = document.getElementById("toTop");
  const bar = document.getElementById("progressBar");

  /* Mobile menu */
  function setMenu(open) {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  }
  if (burger && menu) {
    burger.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) setMenu(false);
    });
  }

  /* Scroll state: header background, progress bar, back-to-top */
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    topbar.classList.toggle("is-scrolled", y > 30);
    if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    if (toTop) toTop.classList.toggle("show", y > 600);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* Active link highlighting */
  const links = Array.prototype.slice.call(document.querySelectorAll("#primaryMenu a"));
  const map = {};
  links.forEach(function (a) { map[a.getAttribute("href")] = a; });
  const targets = links.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (l) { l.classList.remove("active"); });
        const a = map["#" + e.target.id];
        if (a) a.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  targets.forEach(function (s) { io.observe(s); });
})();
