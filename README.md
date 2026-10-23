# Quebrada em Cena — site

Site simples (HTML + CSS + JS). Não precisa instalar nada.

## Estrutura
```
quebrada-em-cena/
├── index.html   → estrutura da página (raramente mexe)
├── dados.js     → TODOS os textos, eventos, turma, contatos  ← edite aqui
├── style.css    → cores, fontes e visual
├── script.js    → monta a página (não precisa mexer)
└── img/         → coloque as fotos aqui
```

## Fotos
Coloque as imagens na pasta `img/` com os nomes usados no `dados.js`
(ex.: `img/hero.jpg`, `img/museu-da-favela.jpg`, `img/grafite.jpg`).
Se a foto não existir, aparece "Foto em breve".

## 1. Editar no VS Code
1. Instale o [VS Code](https://code.visualstudio.com/) e a extensão **Live Server**.
2. Abra a pasta `quebrada-em-cena` (File → Open Folder).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.
4. Edite o `dados.js`, salve, e a página atualiza sozinha.

## 2. Publicar grátis no GitHub Pages
1. Crie uma conta em [github.com](https://github.com).
2. **New repository** → nome `quebrada-em-cena` → Public → Create.
3. Clique em **uploading an existing file**, arraste todos os arquivos/pastas e clique em **Commit changes**.
4. Vá em **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
5. Em 1–2 minutos o site fica em: `https://SEU-USUARIO.github.io/quebrada-em-cena/`

## 3. Atualizar depois
- **Pelo navegador:** abra o `dados.js` no GitHub → ícone de lápis → edite → *Commit changes*.
- **Pelo VS Code:** instale o Git, use a aba *Source Control* (ícone de ramificação) → *Commit* → *Sync/Push*.

## 4. Usando IA para mudanças
Cole o arquivo (`dados.js` ou `style.css`) no Claude e peça, por exemplo:
- "Adicione um evento: Sarau na escola, dia 10/11, com essa descrição..."
- "Troque o amarelo por verde-limão"
- "Crie uma seção de Galeria de fotos"

Depois substitua o arquivo pelo novo e faça o commit.

## Dica: várias pessoas editando
No GitHub: **Settings → Collaborators** → adicione os colegas. Assim ninguém perde o acesso se alguém sair do grupo.
