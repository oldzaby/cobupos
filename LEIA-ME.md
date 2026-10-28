# Costa's POS — app instalável (1 aparelho)

POS + estoque como app que se instala no telemóvel (PWA), grátis.
Os dados ficam **só neste aparelho**. No fecho do dia, o relatório (vendas + bloco de estoque) vai por **WhatsApp**.

## 1. Pôr online (uma vez, grátis)
O telemóvel precisa de um endereço https para instalar a app.

**Netlify (a mais simples)**
1. Cria conta em netlify.com.
2. "Add new site" → "Deploy manually" → arrasta esta pasta (descompactada).
3. Recebes um endereço tipo `https://nome.netlify.app`.

**GitHub Pages**
1. Cria um repositório no GitHub e envia estes ficheiros para a raiz.
2. Settings → Pages → Branch `main` / root.
3. Endereço: `https://teu-utilizador.github.io/nome-do-repo/`.

## 2. Instalar no aparelho
- **Android (Chrome):** abre o endereço → menu ⋮ → "Instalar app".
- **iPhone (Safari):** abre o endereço → Partilhar → "Adicionar ao ecrã principal". **Abre sempre pelo ícone**, nunca pelo Safari: são memórias separadas e os dados ficariam em dois sítios.

Faz o primeiro arranque com internet (carrega as fontes). Depois funciona sem rede.

## 3. Configurar
1. Cria a conta do dono (primeiro acesso).
2. Definições → **WhatsApp dos relatórios**: indicativo + número, só algarismos (ex.: 244…). Vazio = escolhes o contacto de cada vez.
3. Estoque: "Começar o estoque", fichas técnicas, custos e a primeira contagem.

## 4. Fecho diário
Caixa → fechar o(s) turno(s) → **Fechar o dia** → "Enviar por WhatsApp". Abre o WhatsApp com o texto pronto; só falta carregar em enviar.

## 5. Cópia de segurança (importante)
Definições → **Guardar cópia** → envia o ficheiro para ti no WhatsApp ou Drive, **uma vez por semana**. Se limpares os dados do navegador, desinstalares a app ou trocares de telemóvel, só a cópia te salva. "Restaurar cópia" repõe tudo. O ficheiro tem as vendas e os PIN cifrados: não o partilhes.

## Limites a conhecer
- Um aparelho só; não sincroniza com outro.
- Guarda as últimas 3000 vendas neste aparelho. O estoque só é fiável com contagens regulares.
- As fontes vêm da Google e ficam em cache depois do primeiro uso online; sem elas usa-se uma fonte do sistema.
- Play Store tem taxa única da Google e App Store taxa anual da Apple; não são precisas para usar a app.

## Atualizar a app
Substitui o `index.html` no alojamento e muda o número em `sw.js` (`costas-pos-v1` → `v2`). A app atualiza na abertura seguinte com internet; os dados não se perdem.
