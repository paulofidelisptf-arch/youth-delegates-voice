# Youth Delegates Voice — site

Wireframe de apresentação da proposta *Youth Delegates Voice*, criada na Assembleia Global da Anistia Internacional (Rio, agosto de 2026). Site estático, em HTML, CSS e JS puros, sem build e sem dependências.

**No ar:** https://youthvoicewireframe.vercel.app

## Antes de mexer

Leia o [CHANGELOG.md](CHANGELOG.md). Ele traz o mapa do site (onde fica cada coisa) e o histórico de decisões. As pendências estão em [TODO.md](TODO.md) e as ideias em [BACKLOG.md](BACKLOG.md).

## Rodar no computador

```
python -m http.server 8765
```

Rode o comando dentro desta pasta e abra http://127.0.0.1:8765. Abrir o `index.html` direto no navegador também funciona, mas os vídeos tocam melhor com o servidor. A tecla **G** mostra as linhas-guia do grid.

## Regras rápidas

- **Bilíngue:** cada texto existe duas vezes, em `<span lang="en">` e `<span lang="pt">`. Ao mudar um texto, mude os dois.
- **Imagens e vídeos** (`assets/img/`, `assets/video/`) são gerados por scripts a partir de material bruto que não está neste repositório. Para trocar algum, fale com o Paulo.
- **Pessoas nas fotos e nos vídeos:** a autorização de uso ainda está pendente. Não use essas imagens fora deste site.
- **Publicação:** o Paulo publica na Vercel. Trabalhe numa branch e abra um Pull Request para ele revisar antes de ir ao ar.
- Ao terminar uma mudança, registre no topo do histórico do `CHANGELOG.md`.
