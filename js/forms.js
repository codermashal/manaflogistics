/* ==========================================================
   forms.js — Contact form + newsletter validation
   To send real emails, replace the submit handlers' "send()"
   with a fetch() to your backend / form service.
   ========================================================== */
(function () {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRe = /^[+()\d\s-]{7,20}$/;

  function setError(field, bad) {
    field.classList.toggle("has-error", bad);
    const ctrl = field.querySelector(".input, .textarea");
    if (ctrl) ctrl.classList.toggle("invalid", bad);
  }

  /* Placeholder for a real request */
  function send(payload) {
    return new Promise(function (resolve) { setTimeout(function () { resolve({ ok: true, payload: payload }); }, 700); });
  }

  /* ----- Contact form ----- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.querySelectorAll(".input, .textarea").forEach(function (el) {
      el.addEventListener("input", function () { setError(el.closest(".field"), false); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      let valid = true;

      form.querySelectorAll("[required]").forEach(function (el) {
        const v = (el.value || "").trim();
        let bad = !v;
        if (!bad && el.type === "email") bad = !emailRe.test(v);
        if (!bad && el.type === "tel") bad = !phoneRe.test(v);
        setError(el.closest(".field"), bad);
        if (bad) valid = false;
      });
      if (!valid) { const first = form.querySelector(".invalid"); if (first) first.focus(); return; }

      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.style.opacity = ".7";
      send(Object.fromEntries(data.entries())).then(function () {
        form.reset();
        btn.disabled = false; btn.style.opacity = "";
        ManafToast(ManafI18n.t("form.ok"));
      });
    });
  }

  /* ----- WhatsApp quote ----- */
  const waBtn = document.getElementById("waQuote");
  if (waBtn && form) {
    waBtn.addEventListener("click", function () {
      const f = form.elements;
      const name = f.name.value.trim(), phone = f.phone.value.trim();
      /* name + phone are the minimum we need to follow up */
      setError(f.name.closest(".field"), !name);
      setError(f.phone.closest(".field"), !phone || !phoneRe.test(phone));
      if (!name || !phone || !phoneRe.test(phone)) { form.querySelector(".invalid").focus(); return; }

      const ar = ManafI18n.lang === "ar";
      const L = ar
        ? ["مرحباً مناف لوجستيك، أرغب في الحصول على عرض سعر.", "الاسم", "الجوال", "المدينة", "من", "إلى", "الخدمة", "التفاصيل"]
        : ["Hello Manaf Logistics, I'd like a shipping quote.", "Name", "Phone", "City", "From", "To", "Service", "Details"];
      const rows = [[L[1], name], [L[2], phone], [L[3], f.city.value.trim()], [L[4], f.from.value.trim()],
                    [L[5], f.to.value.trim()], [L[6], f.service.value], [L[7], f.message.value.trim()]]
        .filter(function (r) { return r[1]; })
        .map(function (r) { return r[0] + ": " + r[1]; });
      const text = [L[0]].concat(rows).join("\n");
      window.open("https://wa.me/966531822246?text=" + encodeURIComponent(text), "_blank", "noopener");
    });
  }

  /* ----- Newsletter ----- */
  const sub = document.getElementById("subForm");
  if (sub) {
    sub.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById("subEmail");
      if (!emailRe.test(input.value.trim())) { ManafToast(ManafI18n.t("foot.err")); input.focus(); return; }
      send({ email: input.value.trim() }).then(function () { input.value = ""; ManafToast(ManafI18n.t("foot.ok")); });
    });
  }
})();
