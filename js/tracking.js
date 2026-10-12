/* ==========================================================
   tracking.js — Shipment tracking widget (DEMO)
   Replace fetchStatus() with a real API call to your system.
   ========================================================== */
(function () {
  const form = document.getElementById("trackForm");
  if (!form) return;
  const input = document.getElementById("trackInput");
  const err = document.getElementById("trackErr");
  const result = document.getElementById("trackResult");
  const noEl = document.getElementById("trkNo");
  const statusEl = document.getElementById("trkStatus");
  const steps = document.querySelectorAll("#trkSteps li");
  let lastStage = 0;

  const PATTERN = /^MNF-\d{4,8}$/i;

  /* Demo logic: stage derived from the digits. Swap with: fetch('/api/track/' + no).then(r => r.json()) */
  function fetchStatus(no) {
    const digits = no.replace(/\D/g, "");
    const stage = (digits.split("").reduce(function (a, d) { return a + Number(d); }, 0) % 4) + 1;
    return Promise.resolve({ stage: stage });
  }

  function render(stage) {
    lastStage = stage;
    steps.forEach(function (li, i) { li.classList.toggle("done", i < stage); });
    statusEl.textContent = ManafI18n.t("st." + stage);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const no = input.value.trim().toUpperCase();
    if (!PATTERN.test(no)) {
      err.style.display = "block";
      result.classList.remove("is-open");
      input.focus();
      return;
    }
    err.style.display = "none";
    noEl.textContent = no;
    steps.forEach(function (li) { li.classList.remove("done"); });
    result.classList.add("is-open");
    fetchStatus(no).then(function (data) {
      /* small delay so the progress animation is visible */
      setTimeout(function () { render(data.stage); }, 250);
    });
  });

  input.addEventListener("input", function () { err.style.display = "none"; });

  /* Keep the status text in the right language after switching */
  document.addEventListener("langchange", function () { if (lastStage) statusEl.textContent = ManafI18n.t("st." + lastStage); });
})();
