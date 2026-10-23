// =============================================================
//  QUEBRADA EM CENA — CONTEÚDO DO SITE
//  Edite SÓ este arquivo para mudar textos, eventos, turma etc.
//  Dica: mantenha as aspas "" e as vírgulas no fim de cada linha.
// =============================================================

const SITE = {
  nome: "Quebrada em Cena",
  slogan: "Plataforma de Cultura Periférica",

  hero: {
    titulo: "A QUEBRADA TEM VOZ",
    subtitulo:
      "Arte, cultura e expressão que nascem da periferia. Um espaço feito por jovens, para mostrar o que a quebrada produz.",
    botao: { texto: "Conheça o projeto", link: "#sobre" },
    imagem: "img/hero.jpg", // troque pela sua foto (ou deixe vazio "")
  },

  sobre: {
    titulo: "SOBRE",
    texto: [
      "O Quebrada em Cena é uma plataforma criada por uma turma de aprendizes para valorizar e divulgar a cultura periférica.",
      "Aqui a gente registra vivências, visitas, oficinas e tudo que movimenta a arte nas quebradas: grafite, música, dança, poesia, moda e muito mais.",
    ],
    destaques: [
      { numero: "100%", texto: "Cultura periférica" },
      { numero: "Jovens", texto: "Criando conteúdo" },
      { numero: "SP", texto: "Raízes na quebrada" },
    ],
  },

  programacao: {
    titulo: "PROGRAMAÇÃO",
    itens: [
      { data: "Em breve", titulo: "Próxima atividade", descricao: "Descreva aqui a próxima ação da turma.", local: "A definir" },
      { data: "Em breve", titulo: "Oficina", descricao: "Descreva a oficina, o tema e quem participa.", local: "A definir" },
    ],
  },

  eventos: {
    titulo: "EVENTOS",
    itens: [
      {
        titulo: "Visita ao Museu da Favela — Sé",
        descricao: "A turma conheceu o Museu da Favela, um espaço que conta a história e a força das comunidades.",
        imagem: "img/museu-da-favela.jpg",
      },
      {
        titulo: "Grafite em sala",
        descricao: "Uma sessão de grafite feita pela turma em sala, colocando no muro a identidade da quebrada.",
        imagem: "img/grafite.jpg",
      },
    ],
  },

  turma: {
    titulo: "A TURMA",
    texto: "Quem faz o Quebrada em Cena acontecer.",
    membros: [
      { nome: "Nome 1", funcao: "Função / interesse", foto: "" },
      { nome: "Nome 2", funcao: "Função / interesse", foto: "" },
      { nome: "Nome 3", funcao: "Função / interesse", foto: "" },
      { nome: "Nome 4", funcao: "Função / interesse", foto: "" },
    ],
  },

  contato: {
    titulo: "CONTATO",
    texto: "Quer colar com a gente, divulgar um trampo ou propor parceria? Chama!",
    email: "contato@exemplo.com",
    instagram: "https://instagram.com/",
    whatsapp: "", // ex: "https://wa.me/5511999999999"
  },

  rodape: "Quebrada em Cena — feito na quebrada, pra quebrada.",
};
