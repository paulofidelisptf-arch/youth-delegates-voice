# CHANGELOG — site Youth Delegates Voice

**No ar:** https://youthvoicewireframe.vercel.app · publicar: `npx vercel deploy --prod` dentro desta pasta (o `.vercelignore` tira `_revisao/`, os `.md` e o `.env.local`).

Ler este arquivo primeiro. Ele traz o mapa do site e o histórico, para não ser preciso reler tudo a cada sessão.

## Mapa

| O quê | Onde |
|---|---|
| Página principal (EN e PT no mesmo HTML) | `index.html` |
| Agenda (calendário de conteúdo; eventos em `assets/js/agenda.js`) | `agenda.html` |
| Participe! (prévia da pesquisa; link do Google Forms em `data-link`) | `participe.html` |
| Aviso de privacidade | `privacidade.html` |
| Estilos (paleta, tipografia, componentes) | `assets/css/style.css` |
| Fontes locais (`@font-face`) | `assets/css/fonts.css` + `assets/fonts/*.woff2` |
| Comportamento (idioma, vídeos, cartões, revelação, grid) | `assets/js/main.js` |
| Imagens | `assets/img/` (geradas por script a partir de `../01-brutos/`) |
| Vídeos curtos do site | `assets/video/` (vazia até a edição ser aprovada) |
| SEO | `sitemap.xml`, `robots.txt`, `<head>` do `index.html` |
| Capturas de revisão (não publicar) | `_revisao/` |

**Como o idioma funciona:** cada texto existe duas vezes, `<span lang="en">` e `<span lang="pt">`. O atributo `data-lang` do `<html>` esconde um dos dois. O botão EN/PT troca o atributo e guarda a escolha no navegador. Para editar um texto, mude os dois spans.

**Como os vídeos entram:** cada `<figure class="player">` tem `data-src` (e `data-src-vertical` no vídeo do Meet). Vazio = o clique mostra o aviso "edição em andamento". Preenchido com `assets/video/arquivo.mp4` = o vídeo toca e a duração aparece sozinha.

**Linhas-guia do grid:** tecla `G` ou `?grid=1` na URL.

**Seções da página, em ordem:** topo (`#top`), história da GA (`#story`), o que jovens doam, vídeos do Meet (`#video`: parte 1 Argélia × Brasil e parte 2 Brasil × Argélia) com destaque do Instagram, busca × realidade (`#search-vs-reality`), proposta em 7 pontos (`#proposal`), teste intergeracional (`#test`), articulações (`#connections`), chamada final, rodapé com privacidade.

## Histórico

### 2026-10-15 — código no GitHub

- **Pedido do Paulo:** abrir o site para outra programadora editar.
- **Repositório privado:** https://github.com/paulofidelisptf-arch/youth-delegates-voice, com só esta pasta. O `.gitignore` deixa de fora `_revisao/`, `.vercel/` e `.env*`. Os brutos, os vídeos em alta e os scripts de `../ferramentas/` não entram.
- **README.md novo,** para quem chega: como rodar no computador, a regra dos textos bilíngues e o fluxo de branch e Pull Request.
- **Publicação:** ainda pelo `npx vercel deploy --prod`; o GitHub não está ligado à Vercel.

### 2026-10-15 — parte 2 do Meet: #FACT CHECK Brasil × Argélia

- **Pedido do Paulo:** o vídeo do Meet mostrava o que ele aprendeu sobre a Argélia, mas não o que a Dounia aprendeu sobre o Brasil. Faltava uma parte com mitos e fatos sobre o Brasil, no mesmo lugar da conversa do webinar.
- **Novo vídeo (2:17, 16:9 e 9:16):** feito da segunda metade do Meet (32:04 em diante), em que o Paulo faz as perguntas dele: favela, Anitta e povos indígenas. A voz da Dounia não foi gravada; a abertura avisa isso, e entram as perguntas e os comentários do Paulo, com o dado de cada mito. Fecho: "você sabe mais do que muito brasileiro".
- **Dados das cartelas:** 8,1% dos brasileiros (16,4 milhões) moram em favelas e há 391 povos indígenas, 295 línguas e 1,69 milhão de pessoas, ambos do IBGE (Censo 2022). A Anitta foi a primeira artista brasileira no 1º lugar do ranking global do Spotify, em 24/03/2022.
- **Seção `#video`:** passou a ter duas partes, com rótulo numerado (`.part`): **1 · A Dounia pergunta sobre a Argélia** (o vídeo que já estava) e **2 · O Paulo pergunta sobre o Brasil** (o novo, com a lista "O que o mundo não sabe sobre o Brasil" em Mito × Fato ao lado). O texto de abertura da seção agora diz que os dois lados perguntaram.
- **Player novo:** `data-src` = `assets/video/youth-delegates-voice-factcheck-brasil-16x9.mp4`, `data-src-vertical` = `…-brasil-9x16.mp4`; pôster `assets/img/poster-ep-brasil.jpg`.
- **Como o vídeo foi feito:** roteiro em `../ferramentas/factcheck_brasil_cenas.py`. Os mesmos scripts da parte 1 (`factcheck_cartelas.py` e `render_factcheck.py`) agora aceitam outro roteiro (`--roteiro=factcheck_brasil_cenas`), e a parte 1 continua saindo igual. Livro cena a cena (com os trechos que ficaram de fora) em `../03-video-webinar-meet/LIVRO - MEET - fact check Brasil cena a cena.md`.
- **Arquivos:** `index.html`, `assets/css/style.css` (`.part*`, `.mf__head`), `assets/img/poster-ep-brasil.jpg`, `assets/video/`.

### 2026-10-15 — Collectively Free removido

- O cartão do Collectively Free saiu da seção Articulações, a pedido do Paulo. A grade passou para duas colunas (Banana-Terra e Anistia Ucrânia).
- **Arquivos:** `index.html`, `assets/css/style.css` (`.links`).

### 2026-10-14 (madrugada) — correções do Paulo, Agenda, Participe! e publicação

- **Nome do projeto:** Youth Delegates Voice (antes "Global Youth Test", nome errado). Trocado em títulos, marca, rodapé, imagem de compartilhamento (`og.jpg`), ícone (`favicon.svg`, agora "YD") e vídeos.
- **Abertura:** "…complementando o trabalho de quem já atua e para aqueles que ainda não sabem por onde começar".
- **Foto da capa:** legenda e texto alternativo agora dizem "Voluntários ativistas do Rio de Janeiro, junto a Jurema Werneck, da Anistia Internacional Brasil".
- **Mito × Fato:** fé ("nem todos fazem parte, e há muitos jeitos de viver") e mulheres ("o feminismo e a ideia do que uma mulher pode ser são bem conservadores" → "quase metade dos formados em engenharia são mulheres, 48,5%").
- **Evidências:** cada número ganhou unidade ("515 estudos") e um título curto, porque o número sozinho ficava solto.
- **Rodapé:** autoria de Paulo Thiago e Dounia Zellal; aviso de "wireframe de apresentação".
- **Novas páginas:** `agenda.html` (calendário de novembro/2026 a janeiro/2027, filtros, detalhes por evento, inscrição e arquivo .ics) e `participe.html` (como funciona a pesquisa, prévia do formulário com indicações de onde clicar, aviso de dados). Menu ganhou "Agenda" e o botão "Participe!", visíveis também no celular.
- **Redes:** Instagram, LinkedIn e TikTok discretos na chamada final e no rodapé.
- **Avisos honestos** (`main.js`, `mostrarAviso`) para o que ainda não existe: pesquisa (abre em 14/12), inscrições e envio da prévia.
- **Vídeos:** `assets/video/youth-delegates-voice-ga.mp4` (sem o abraço) e `youth-delegates-voice-factcheck-16x9/9x16.mp4` (legenda corrigida, sem trechos parados).
- **Publicação:** `.vercelignore` tira `_revisao/` e os `.md` do site publicado.

### 2026-10-14 (noite, 2) — vídeo #FACT CHECK no lugar do Meet

- **Vídeo do Meet substituído pelo #FACT CHECK Argélia × Brasil** (1:47). A voz da Dounia não foi gravada pelo OBS; o vídeo usa as perguntas dela em cartelas e as respostas do Paulo, com os dois rostos ao vivo nos trechos em que ele fala.
- **Player `#video`:** `data-src` = `assets/video/global-youth-test-factcheck-16x9.mp4` (computador) e `data-src-vertical` = `assets/video/global-youth-test-factcheck-9x16.mp4` (celular, até 760 px).
- **Capítulos viraram "Mito × Fato"** (`.mf`): deserto e camelos → cidades, Mediterrâneo e neve; "todo mundo vive a religião igual" → muitos jeitos de viver; "mulher não vai para a engenharia" → 48,5% (UNESCO 2021).
- **Texto da seção** explica que as perguntas da Dounia aparecem na tela.
- **Arquivos:** `index.html`, `assets/css/style.css` (`.mf*`), `assets/video/`.

### 2026-10-14 (noite) — abertura reescrita e seção de evidências

- **Abertura:** o título passou de "Começou com uma amizade" para **"Para além da Assembleia Global"**. O texto agora diz o propósito: levar a conversa a quem não pôde estar na GA (risco, falta de internet, barreira linguística), num ambiente seguro, complementando o trabalho do Secretariado Internacional. Pedido do Paulo: o texto anterior estava subjetivo demais.
- **História (`#story`):** menos subjetiva, termina em "Poucos jovens ativistas conseguem estar nessa sala. O projeto leva a sala até eles".
- **Nova seção `#evidence`** ("Boa intenção não basta"), logo abaixo do vídeo, com 7 dados e as fontes: contato entre grupos (Pettigrew & Tropp 2006), intervenções adaptadas à cultura (Griner & Smith 2006), localização da ajuda (Share Trust 2022), intercâmbio virtual (Erasmus+ 2020), pessoas offline (ITU 2025), língua (UNESCO GEM 2025) e defensores mortos (Front Line Defenders 2024/25). O oitavo cartão liga as evidências à proposta.
- **Destaque dos títulos:** a faixa ficou mais alta para cobrir os acentos das maiúsculas (É, Ã), que sumiam sobre o fundo da mesma cor.
- **Arquivos:** `index.html`, `assets/css/style.css` (`.evidence`, `.fact*`, `.lede--small`), `assets/js/main.js` (títulos da aba, revelação dos cartões).

### 2026-10-14 (tarde) — vídeo da GA no ar e citação corrigida

- **Vídeo da GA ligado:** `assets/video/global-youth-test-ga.mp4` (versão web 720×1280, 17 MB, 1:34) no player vertical da seção `#story`. O arquivo cheio (1080×1920) fica em `../02-video-conexao-GA/`. O pôster `assets/img/poster-ga.jpg` é um quadro limpo com o mesmo tratamento de cor do vídeo.
- **Citação corrigida** em `#search-vs-reality`: a frase atribuída à Dounia ("I like to eat…") era, na verdade, anotação do Paulo na tela do Meet. Entrou no lugar a fala gravada da delegada na GA ("Don't trust Google…", IMG_1037 04:06) e a do Paulo ("one simple conversation", 06:05).
- **Player:** chama `play()` no próprio clique, para o navegador não bloquear o som.
- **Arquivos:** `index.html`, `assets/css/style.css` (`.quote--small`), `assets/js/main.js`, `assets/img/poster-ga.jpg`, `assets/video/`.

### 2026-10-14 — primeira versão

- **O que:** site de uma página, bilíngue (EN/PT), com a história que começa na Assembleia Global da Anistia (Rio, agosto de 2026), os dois vídeos (conversa noturna na GA e Meet Argélia × Brasil), o destaque do episódio 1 no Instagram, a proposta em 7 pontos, o Teste Intergeracional interativo e as articulações (Banana-Terra, Collectively Free, Anistia Ucrânia).
- **Por quê:** mostrar o que está sendo projetado a partir do documento *Feedback & Contributions to the Youth Delegates Voice Proposal* (amnesty.rtf), seguindo a identidade visual da Anistia.
- **Identidade visual:** amarelo #FFFF00, preto e branco; cinzas neutros; títulos em caixa alta condensada com faixa de destaque; fotos de pessoas reais em vez de ícones. Fonte das regras: *Visual Identity Guidelines* da Amnesty International UK (abr/2025), em `../05-referencias/`.
- **Fontes:** Amnesty Trade Gothic e Sabon são de uso restrito a quem trabalha na Anistia. No lugar: Barlow Condensed 600/800 (títulos), Barlow 400/600 (texto) e EB Garamond itálico (citações, no papel da Sabon). Todas OFL, hospedadas no próprio site.
- **Logo:** não usado. As diretrizes dizem que o uso do logo passa pelo time de marca. O rodapé avisa que não é site oficial.
- **Busca "algeria people":** recriada só com as manchetes. As fotos da busca ficaram de fora porque são de terceiros e mostram manifestantes identificáveis.
- **Arquivos:** todos os listados no mapa.
