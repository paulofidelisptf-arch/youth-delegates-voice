/* Global Youth Test — comportamento do site (sem dependências, sem cookies). */
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  var params = new URLSearchParams(location.search);

  // ---------- Idioma ----------
  var TITLES = {
    en: "Youth Delegates Voice · Beyond the Global Assembly",
    pt: "Youth Delegates Voice · Para além da Assembleia Global"
  };
  function store(key, value) {
    try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); } catch (e) { return null; }
  }
  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    var b = document.body.dataset;
    if (b.titleEn) document.title = lang === "pt" ? b.titlePt : b.titleEn;
    else if (TITLES[lang] && !b.page) document.title = TITLES[lang];
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });
    store("gyt-lang", lang);
  }
  var initial = params.get("lang") || store("gyt-lang") ||
    ((navigator.language || "").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");
  setLang(initial === "pt" ? "pt" : "en");
  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang); });
  });

  // ---------- Vídeos ----------
  // Cada <figure class="player"> mostra o vídeo de data-src (ou data-src-vertical em telas estreitas).
  // Sem arquivo, o clique abre um aviso honesto de que a edição está em andamento.
  function fmt(s) {
    s = Math.round(s);
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }
  document.querySelectorAll(".player").forEach(function (fig) {
    var narrow = window.matchMedia("(max-width: 760px)").matches;
    var src = (narrow && fig.dataset.srcVertical) || fig.dataset.src;
    var poster = fig.querySelector(".player__poster");
    var notice = fig.querySelector(".player__notice");
    var dur = fig.querySelector("[data-dur]");

    if (src && dur) {
      var probe = document.createElement("video");
      probe.preload = "metadata";
      probe.src = src;
      probe.addEventListener("loadedmetadata", function () {
        dur.textContent = fmt(probe.duration);
        dur.hidden = false;
      });
    }

    poster.addEventListener("click", function () {
      if (!src) {
        if (notice) notice.hidden = !notice.hidden;
        return;
      }
      var v = document.createElement("video");
      v.src = src;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.poster = poster.querySelector("img").src;
      poster.replaceWith(v);
      v.focus();
      // o clique já é o gesto do usuário; se o navegador ainda bloquear, ficam os controles
      var tocando = v.play();
      if (tocando && tocando.catch) tocando.catch(function () {});
    });
  });

  // ---------- Avisos honestos para o que ainda não existe ----------
  var AVISOS = {
    pesquisa: { en: "<b>The survey opens on 14 December 2026.</b> Meanwhile, see the questions below.",
                pt: "<b>A pesquisa abre em 14 de dezembro de 2026.</b> Enquanto isso, veja as perguntas abaixo." },
    previa: { en: "<b>This is a preview:</b> nothing was sent. The real survey opens on Google Forms.",
              pt: "<b>Isto é uma prévia:</b> nada foi enviado. A pesquisa de verdade abre no Google Forms." },
    inscricao: { en: "<b>Registration opens soon.</b> Follow us on Instagram to get the link.",
                 pt: "<b>As inscrições abrem em breve.</b> Acompanhe no Instagram para receber o link." }
  };
  var timer;
  window.mostrarAviso = function (chave) {
    var box = document.getElementById("aviso");
    if (!box) {
      box = document.createElement("div");
      box.id = "aviso"; box.className = "aviso"; box.setAttribute("role", "status");
      document.body.appendChild(box);
    }
    var m = AVISOS[chave];
    box.innerHTML = '<span lang="en">' + m.en + '</span><span lang="pt">' + m.pt + "</span>";
    box.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(function () { box.hidden = true; }, 6000);
  };
  document.querySelectorAll("[data-aviso]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (el.dataset.link) { e.preventDefault(); window.open(el.dataset.link, "_blank", "noopener"); return; }
      if (el.dataset.aviso === "previa") e.preventDefault();
      window.mostrarAviso(el.dataset.aviso);
    });
  });

  // ---------- Cartões do teste ----------
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      card.setAttribute("aria-expanded", String(card.getAttribute("aria-expanded") !== "true"));
    });
  });

  // ---------- Revelação ao rolar ----------
  var targets = document.querySelectorAll(
    ".display, .h2, .intro, .kicker--line, .point, .link, .fact, .cards li, .insta, .search, .reality, .give__list, .story__photo, .people, .player"
  );
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) {
      if (!el.classList.contains("display")) el.classList.add("reveal");
      io.observe(el);
    });
  } else {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  }

  // ---------- Linhas-guia do grid (tecla G ou ?grid=1) ----------
  if (params.get("grid") === "1") root.classList.add("show-grid");
  document.addEventListener("keydown", function (e) {
    if ((e.key === "g" || e.key === "G") && !/input|textarea|select/i.test(e.target.tagName) && !e.ctrlKey && !e.metaKey) {
      root.classList.toggle("show-grid");
    }
  });
})();
