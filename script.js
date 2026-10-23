// Monta o site a partir do dados.js — normalmente não precisa mexer aqui.
const $ = (id) => document.getElementById(id);
const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const foto = (src, alt) =>
  src
    ? `<div class="foto"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.parentNode.innerHTML='Foto em breve'"></div>`
    : `<div class="foto">Foto em breve</div>`;

// Hero
$("heroTag").textContent = SITE.slogan;
$("heroTitulo").textContent = SITE.hero.titulo;
$("heroSub").textContent = SITE.hero.subtitulo;
$("heroBtn").textContent = SITE.hero.botao.texto;
$("heroBtn").href = SITE.hero.botao.link;
if (SITE.hero.imagem) {
  const img = new Image();
  img.onload = () => {
    $("hero").style.backgroundImage =
      `linear-gradient(135deg, rgba(230,57,70,.45), rgba(13,13,13,.92)), url("${SITE.hero.imagem}")`;
  };
  img.src = SITE.hero.imagem;
}

// Sobre
$("sobreTitulo").textContent = SITE.sobre.titulo;
$("sobreTexto").innerHTML = SITE.sobre.texto.map((p) => `<p>${esc(p)}</p>`).join("");
$("destaques").innerHTML = SITE.sobre.destaques
  .map((d) => `<div class="destaque"><strong>${esc(d.numero)}</strong>${esc(d.texto)}</div>`)
  .join("");

// Programação
$("progTitulo").textContent = SITE.programacao.titulo;
$("progLista").innerHTML = SITE.programacao.itens
  .map(
    (i) => `<div class="item-prog">
      <div class="data">${esc(i.data)}</div>
      <div><h3>${esc(i.titulo)}</h3><p>${esc(i.descricao)}</p><small>📍 ${esc(i.local)}</small></div>
    </div>`
  )
  .join("");

// Eventos
$("eventosTitulo").textContent = SITE.eventos.titulo;
$("eventosGrid").innerHTML = SITE.eventos.itens
  .map((e) => `<div class="card">${foto(e.imagem, e.titulo)}<div class="info"><h3>${esc(e.titulo)}</h3><p>${esc(e.descricao)}</p></div></div>`)
  .join("");

// Turma
$("turmaTitulo").textContent = SITE.turma.titulo;
$("turmaTexto").textContent = SITE.turma.texto;
$("turmaGrid").innerHTML = SITE.turma.membros
  .map((m) => `<div class="card">${foto(m.foto, m.nome)}<div class="info"><h3>${esc(m.nome)}</h3><p>${esc(m.funcao)}</p></div></div>`)
  .join("");

// Contato
const c = SITE.contato;
$("contatoTitulo").textContent = c.titulo;
$("contatoTexto").textContent = c.texto;
$("contatoLinks").innerHTML = [
  c.email && `<a class="btn" href="mailto:${esc(c.email)}">E-mail</a>`,
  c.instagram && `<a class="btn" href="${esc(c.instagram)}" target="_blank" rel="noopener">Instagram</a>`,
  c.whatsapp && `<a class="btn" href="${esc(c.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>`,
].filter(Boolean).join("");

// Rodapé
$("rodape").textContent = `© ${new Date().getFullYear()} ${SITE.rodape}`;

// Menu no celular
$("menuBtn").onclick = () => $("menu").classList.toggle("aberto");
document.querySelectorAll("#menu a").forEach((a) => (a.onclick = () => $("menu").classList.remove("aberto")));
