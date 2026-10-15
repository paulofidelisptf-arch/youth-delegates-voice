/* Agenda do Youth Delegates Voice.
   PARA EDITAR: mude só a lista EVENTOS abaixo. Cada evento:
   data "AAAA-MM-DD", hora "HH:MM" (horário de Brasília; vazio = dia inteiro), tipo (webinar | aberta | newsletter | pesquisa),
   titulo/descricao/formato/pauta em {en, pt}, inscricao = link (vazio mostra "inscrições em breve"). */
(function () {
  var MESES = {
    "2026-11": { en: "November 2026", pt: "Novembro 2026", tema: { en: "Theme of the month: disinformation and stereotypes", pt: "Tema do mês: desinformação e estereótipos" } },
    "2026-12": { en: "December 2026", pt: "Dezembro 2026", tema: { en: "Theme of the month: peer-to-peer training", pt: "Tema do mês: formação entre pares" } },
    "2027-01": { en: "January 2027", pt: "Janeiro 2027", tema: { en: "Theme of the month: across generations", pt: "Tema do mês: entre gerações" } }
  };
  var TIPOS = {
    webinar: { en: "Live webinar · theme of the month", pt: "Webinar ao vivo · tema do mês" },
    aberta: { en: "Open agenda", pt: "Pauta aberta" },
    newsletter: { en: "Bi-weekly newsletter", pt: "Newsletter quinzenal" },
    pesquisa: { en: "Survey", pt: "Pesquisa" }
  };
  var AO_VIVO = { en: "Live · Google Meet · 60 min · captions in PT and EN · moderated", pt: "Ao vivo · Google Meet · 60 min · legendas em PT e EN · com moderação" };
  var RODA = { en: "Live · 45 min · moderated · topic voted at the start", pt: "Ao vivo · 45 min · com moderação · tema votado no início" };
  var NEWS = { en: "E-mail and website · 5-minute read", pt: "E-mail e site · leitura de 5 minutos" };

  var EVENTOS = [
    { data: "2026-11-04", hora: "", tipo: "newsletter",
      titulo: { en: "Newsletter #1: what the search doesn’t show", pt: "Newsletter #1: o que a busca não mostra" },
      descricao: { en: "The month in summary, the #FACT CHECK Algeria × Brazil and the November agenda.", pt: "O resumo do mês, o #FACT CHECK Argélia × Brasil e a agenda de novembro." },
      formato: NEWS },
    { data: "2026-11-12", hora: "19:00", tipo: "webinar", inscricao: "",
      titulo: { en: "Myth × fact: checking what the internet says about another country", pt: "Mito × fato: como checar o que a internet diz sobre outro país" },
      descricao: { en: "Two young activists from different countries take apart, live, the stereotypes a search shows.", pt: "Dois jovens ativistas de países diferentes desmontam, ao vivo, os estereótipos que a busca mostra." },
      formato: AO_VIVO,
      pauta: { en: ["What the search shows (and what it hides)", "Questions only those who live there can answer", "How to check before sharing"],
               pt: ["O que a busca mostra (e o que esconde)", "Perguntas que só quem vive lá sabe responder", "Como checar antes de compartilhar"] } },
    { data: "2026-11-18", hora: "", tipo: "newsletter",
      titulo: { en: "Newsletter #2: what you asked in the webinar", pt: "Newsletter #2: o que vocês perguntaram no webinar" },
      descricao: { en: "Highlights of the webinar and answers to the questions left open.", pt: "Os melhores momentos do webinar e as respostas das perguntas que ficaram abertas." },
      formato: NEWS },
    { data: "2026-11-26", hora: "19:00", tipo: "aberta", inscricao: "",
      titulo: { en: "Conversation circle: you choose the topic", pt: "Roda de conversa: o tema é de vocês" },
      descricao: { en: "Participants suggest and vote on the topic at the start of the meeting.", pt: "Quem participa sugere e vota o assunto no começo do encontro." },
      formato: RODA },
    { data: "2026-12-02", hora: "", tipo: "newsletter",
      titulo: { en: "Newsletter #3: how peer-to-peer training works", pt: "Newsletter #3: como funciona a formação entre pares" },
      descricao: { en: "Who has already volunteered to mentor, and how to ask for help.", pt: "Quem já topou orientar e como pedir ajuda." },
      formato: NEWS },
    { data: "2026-12-10", hora: "19:00", tipo: "webinar", inscricao: "",
      titulo: { en: "How to write a motion", pt: "Como escrever uma moção" },
      descricao: { en: "Experienced delegates show, step by step, how to turn a local demand into a motion.", pt: "Delegados com experiência mostram, passo a passo, como transformar uma demanda local numa moção." },
      formato: AO_VIVO,
      pauta: { en: ["From a local demand to a text", "Who needs to sign it and how it is voted", "Common mistakes"],
               pt: ["Da demanda local ao texto", "Quem precisa assinar e como se vota", "Erros comuns"] } },
    { data: "2026-12-14", hora: "", tipo: "pesquisa", link: "participe.html",
      titulo: { en: "Community survey #1 opens", pt: "Abre a pesquisa da comunidade #1" },
      descricao: { en: "Five minutes, eight questions. Open until 10 January. The results become the agenda.", pt: "Cinco minutos, oito perguntas. Fica aberta até 10 de janeiro. O resultado vira pauta." },
      formato: { en: "Google Forms · anonymous if you want", pt: "Google Forms · anônima se você quiser" } },
    { data: "2026-12-16", hora: "", tipo: "newsletter",
      titulo: { en: "Newsletter #4: the year in review", pt: "Newsletter #4: o ano em retrospectiva" },
      descricao: { en: "What we learned in the first two months, and the January plan.", pt: "O que aprendemos nos dois primeiros meses e o plano de janeiro." },
      formato: NEWS },
    { data: "2026-12-17", hora: "19:00", tipo: "aberta", inscricao: "",
      titulo: { en: "Open agenda: safety for those who speak up", pt: "Pauta aberta: segurança para quem se expõe" },
      descricao: { en: "Suggested topic: digital and physical safety for activists. The group can change it at the start.", pt: "Tema sugerido: segurança digital e física para ativistas. O grupo pode trocar no começo." },
      formato: RODA },
    { data: "2027-01-13", hora: "", tipo: "newsletter",
      titulo: { en: "Newsletter #5: survey results", pt: "Newsletter #5: o resultado da pesquisa" },
      descricao: { en: "What you answered, and what changes because of it.", pt: "O que vocês responderam e o que muda por causa disso." },
      formato: NEWS },
    { data: "2027-01-21", hora: "19:00", tipo: "webinar", inscricao: "",
      titulo: { en: "The intergenerational test, live", pt: "O teste intergeracional ao vivo" },
      descricao: { en: "Senior leaders and young activists face to face: memes, slang and what each generation means by activism.", pt: "Lideranças e jovens frente a frente: memes, gírias e o que cada geração entende por ativismo." },
      formato: AO_VIVO,
      pauta: { en: ["Five memes, five meanings", "Where the dialogue breaks", "One commitment from each side"],
               pt: ["Cinco memes, cinco significados", "Onde o diálogo quebra", "Um compromisso de cada lado"] } },
    { data: "2027-01-27", hora: "", tipo: "newsletter",
      titulo: { en: "Newsletter #6", pt: "Newsletter #6" },
      descricao: { en: "Highlights of the month and the February agenda.", pt: "O resumo do mês e a agenda de fevereiro." },
      formato: NEWS }
  ];

  var DIAS = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], pt: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"] };
  var lista = document.getElementById("agenda-lista");
  if (!lista) return;

  function bi(o, cls) {
    return '<span lang="en"' + (cls ? ' class="' + cls + '"' : "") + ">" + o.en + '</span><span lang="pt"' + (cls ? ' class="' + cls + '"' : "") + ">" + o.pt + "</span>";
  }
  function utc(data, hora) {
    // Brasília = UTC-3 o ano todo
    var p = data.split("-").map(Number), h = hora.split(":").map(Number);
    return new Date(Date.UTC(p[0], p[1] - 1, p[2], h[0] + 3, h[1]));
  }
  function ics(ev) {
    var z = function (n) { return String(n).padStart(2, "0"); };
    var linhas = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Youth Delegates Voice//Agenda//PT", "BEGIN:VEVENT",
      "UID:" + ev.data + "-" + ev.tipo + "@youth-delegates-voice", "SUMMARY:" + ev.titulo.pt + " / " + ev.titulo.en];
    if (ev.hora) {
      var a = utc(ev.data, ev.hora), b = new Date(a.getTime() + (ev.tipo === "aberta" ? 45 : 60) * 60000);
      var f = function (d) { return d.getUTCFullYear() + z(d.getUTCMonth() + 1) + z(d.getUTCDate()) + "T" + z(d.getUTCHours()) + z(d.getUTCMinutes()) + "00Z"; };
      linhas.push("DTSTART:" + f(a), "DTEND:" + f(b));
    } else {
      linhas.push("DTSTART;VALUE=DATE:" + ev.data.replace(/-/g, ""));
    }
    linhas.push("DESCRIPTION:" + ev.descricao.pt.replace(/,/g, "\\,"), "END:VEVENT", "END:VCALENDAR");
    var blob = new Blob([linhas.join("\r\n")], { type: "text/calendar" });
    var a2 = document.createElement("a");
    a2.href = URL.createObjectURL(blob);
    a2.download = "youth-delegates-voice-" + ev.data + ".ics";
    document.body.appendChild(a2);
    a2.click();
    a2.remove();
  }

  var html = "", mesAtual = "";
  EVENTOS.forEach(function (ev, i) {
    var mes = ev.data.slice(0, 7);
    if (mes !== mesAtual) {
      if (mesAtual) html += "</div>";
      var M = MESES[mes];
      html += '<div class="mes"><div class="mes__h"><h2>' + bi(M) + '</h2><span class="mes__tema">' + bi(M.tema) + "</span></div>";
      mesAtual = mes;
    }
    var d = new Date(ev.data + "T12:00:00");
    var hora = ev.hora ? { en: ev.hora + " Brasília · " + ("0" + ((+ev.hora.slice(0, 2) + 3) % 24)).slice(-2) + ev.hora.slice(2) + " UTC", pt: ev.hora + " (Brasília) · " + ("0" + ((+ev.hora.slice(0, 2) + 3) % 24)).slice(-2) + ev.hora.slice(2) + " UTC" } : { en: "All day", pt: "Dia inteiro" };
    html += '<details class="ev" data-tipo="' + ev.tipo + '"><summary>' +
      '<span class="ev__data">' + d.getDate() + "<small>" + bi({ en: DIAS.en[d.getDay()], pt: DIAS.pt[d.getDay()] }) + "</small></span>" +
      '<span><span class="ev__tipo ev__tipo--' + ev.tipo + '">' + bi(TIPOS[ev.tipo]) + "</span>" +
      '<span class="ev__titulo">' + bi(ev.titulo) + '</span><span class="ev__hora">' + bi(hora) + "</span></span>" +
      '<span class="ev__mais" aria-hidden="true">+</span></summary><div class="ev__corpo">' +
      "<p>" + bi(ev.descricao) + "</p>" +
      '<p class="ev__formato">' + bi(ev.formato) + "</p>" +
      (ev.pauta ? "<p><b>" + bi({ en: "Planned agenda", pt: "Pauta prevista" }) + "</b></p><ul>" + ev.pauta.en.map(function (x, k) { return "<li>" + bi({ en: x, pt: ev.pauta.pt[k] }) + "</li>"; }).join("") + "</ul>" : "") +
      '<div class="ev__acoes">' +
      (ev.tipo === "webinar" || ev.tipo === "aberta" ? '<a class="btn btn--black btn--sm" href="#" data-inscricao="' + (ev.inscricao || "") + '">' + bi({ en: "Register", pt: "Inscrever-se" }) + "</a>" : "") +
      (ev.link ? '<a class="btn btn--black btn--sm" href="' + ev.link + '">' + bi({ en: "See the survey", pt: "Ver a pesquisa" }) + "</a>" : "") +
      '<button type="button" class="btn btn--line btn--sm" data-ics="' + i + '">' + bi({ en: "Add to my calendar", pt: "Adicionar à minha agenda" }) + "</button>" +
      "</div></div></details>";
  });
  html += "</div>";
  lista.innerHTML = html;

  lista.addEventListener("click", function (e) {
    var b = e.target.closest("[data-ics]");
    if (b) { ics(EVENTOS[+b.dataset.ics]); return; }
    var r = e.target.closest("[data-inscricao]");
    if (r) {
      e.preventDefault();
      if (r.dataset.inscricao) window.open(r.dataset.inscricao, "_blank", "noopener");
      else if (window.mostrarAviso) window.mostrarAviso("inscricao");
    }
  });

  document.querySelectorAll("[data-filtro]").forEach(function (f) {
    f.addEventListener("click", function () {
      document.querySelectorAll("[data-filtro]").forEach(function (o) { o.setAttribute("aria-pressed", String(o === f)); });
      var t = f.dataset.filtro;
      lista.querySelectorAll(".ev").forEach(function (ev) { ev.hidden = t !== "todos" && ev.dataset.tipo !== t; });
      lista.querySelectorAll(".mes").forEach(function (m) { m.hidden = !m.querySelector(".ev:not([hidden])"); });
    });
  });
})();
