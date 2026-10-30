# COBU ERP — by zbmusic (app instalável, 1 aparelho)

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
3. **Definições → Empresa**: preenche os contactos e dados de identificação; adiciona o logótipo para aparecer nos recibos impressos.
4. Estoque: "Começar o estoque", fichas técnicas, custos e a primeira contagem.

O botão **Skin** permite escolher entre **Corp** (painéis areia e botões azuis em relevo, inspirados nos POS clássicos WinREST), **Costa's** (paleta clássica quente) e **Biolo** (visual de POS em grelha, inspirado na referência partilhada, com botões e contornos terracota). A escolha é guardada por conta; cada utilizador pode usar uma skin diferente.

### Primeira utilização
1. No primeiro arranque, cria a conta do dono com o seu nome e PIN.
2. Depois do primeiro login, preenche o nome da empresa e os dados disponíveis; carrega em **Guardar empresa e começar**.
3. A app abre então as mesas e fica pronta para uso. A configuração inicial não volta a aparecer; os dados da empresa continuam editáveis em **Definições → Empresa**.

O nome da empresa é obrigatório para concluir a primeira configuração. Os outros dados podem ser adicionados ou alterados mais tarde em **Definições → Empresa**.

## 4. Fecho diário
Caixa → fechar o(s) turno(s) → **Fechar o dia** → "Enviar por WhatsApp". Abre o WhatsApp com o texto pronto; só falta carregar em enviar.

## 5. Cópia de segurança (importante)
Definições → **Guardar cópia** → cria uma palavra-passe com pelo menos 8 caracteres e guarda o ficheiro cifrado no WhatsApp ou Drive, **uma vez por semana**. Se limpares os dados do navegador, desinstalares a app ou trocares de telemóvel, só a cópia te salva. Em "Restaurar cópia" ou "Juntar dados", escolhe o ficheiro e introduz a mesma palavra-passe. **Se a perderes, não é possível recuperar a cópia.** As cópias antigas, sem cifragem, ainda podem ser restauradas ou juntas; a app avisa antes de as importar.

### Sincronizar PC, tablet e iPhone pela rede local
O executável Windows pode funcionar como servidor central, mesmo sem internet. O PC, o tablet e o iPhone devem estar ligados à mesma rede Wi‑Fi; mantém o executável aberto enquanto trabalhas.
1. No PC, inicia `COBU ERP.exe` e conclui primeiro a criação do dono e a configuração da empresa.
2. Se já usas a PWA online, cria nela uma cópia cifrada, transfere o ficheiro para o PC e importa-o em **Definições → Juntar dados** no COBU do PC. O endereço local e a PWA online têm armazenamentos separados.
3. No PC, abre **Definições → Sincronização pela rede local** e anota o endereço e o código de 8 algarismos. Se a Firewall do Windows perguntar, permite o acesso apenas em redes privadas.
4. No tablet ou iPhone, abre o endereço mostrado no PC (`http://...`) no navegador. Introduz o código e um nome para o aparelho. Na primeira ligação, as definições e utilizadores vêm do PC; vendas, fechos e movimentos compatíveis guardados nessa origem do navegador são juntados.
5. Mantém o PC ligado e os aparelhos na mesma rede. Alterações sincronizam automaticamente; uma mesa fica bloqueada enquanto outro aparelho a está a editar. Se um aparelho fechar inesperadamente, o bloqueio expira após alguns segundos.

Usa apenas uma rede Wi‑Fi de confiança: a ligação local não usa HTTPS. Em redes de convidados com isolamento entre aparelhos, o emparelhamento pode não funcionar. No iPhone, abre o endereço local no Safari; como é HTTP, a instalação como app no ecrã principal não é suportada por todos os navegadores. Neste endereço HTTP local, alguns navegadores não permitem criar cópias cifradas; faz as cópias no PC servidor. As cópias cifradas continuam recomendadas, porque o PC passa a guardar o conjunto partilhado e pode avariar ou perder-se.

### Transferência manual entre aparelhos
Sem o executável-servidor ou quando os aparelhos não conseguem comunicar pela rede local, usa a cópia cifrada:
1. Fecha o turno no aparelho de origem e guarda uma cópia cifrada.
2. Transfere o ficheiro `.json` para o outro aparelho (por exemplo, através do Drive ou WhatsApp; isso pode exigir internet durante a transferência).
3. No aparelho de destino, abre Definições → **Juntar dados**, escolhe o ficheiro e introduz a palavra-passe.
4. Repete na direção contrária para devolver ao aparelho de origem as vendas registadas no destino.

**Juntar dados** acrescenta vendas, fechos e movimentos de compra/perda compatíveis, evita duplicados e recalcula os relatórios dos dias. Mantém as definições, os pedidos em aberto e a contagem-base do estoque do aparelho de destino. Não juntes uma cópia com um turno aberto: fecha-o primeiro. Depois de juntar, faz uma nova contagem do estoque para reconciliar diferenças físicas. Alterações ao menu, equipa, fichas técnicas ou definições têm de ser feitas/alinhadas separadamente. Esta transferência manual não substitui uma cópia de segurança. Sem internet, a app não transfere o ficheiro por si; é necessário um método de transferência de ficheiros compatível com os aparelhos.

## Empresa, documentos e armazenamento local
- Em **Definições → Empresa**, configura nome, NIF, sede, contactos, registo comercial e regime de IVA, e carrega o logótipo. Estes dados acompanham as cópias de segurança cifradas.
- Recibos de venda, fechos de turno, fechos diários e relatórios mensais podem ser impressos ou guardados como HTML; o diálogo de impressão também pode gerar PDF. Quando o navegador suporta acesso a pastas, escolhe uma para guardar os documentos em subpastas. Noutros navegadores, usa o diálogo de guardar/partilhar ficheiros.
- A aplicação continua a guardar os dados automaticamente no armazenamento privado do navegador em cada aparelho. **Definições → Empresa → Armazenamento neste aparelho** pode pedir ao navegador para proteger esse armazenamento e permite escolher uma pasta de documentos nos navegadores compatíveis. Uma pasta visível não é suportada uniformemente, sobretudo no iPhone; não substitui as cópias de segurança.
- Os documentos impressos são **informativos e não fiscais**. Não são facturas certificadas/autorizadas pela AGT. Para faturação legal em Angola, confirma os requisitos aplicáveis e usa um sistema autorizado.

## Novidades da versão 2
- **Tema por conta:** anteriormente cada pessoa podia escolher uma cor. A versão atual substitui essas paletas pelas skins Corp, Costa's e Biolo.
- **Relatórios:** cartão "Últimos 7 dias" com comparação à semana anterior, comparação com o mês anterior, média por dia da semana, e botões para enviar o resumo da semana ou do mês por WhatsApp.
- **Cópia de segurança:** aviso ao dono ao fim de 7 dias sem cópia, e botão de cópia no relatório do fecho do dia.

## Funcionalidades recentes
- **Nome:** a app abre como COBU ERP, com "by zbmusic".
- **Permissões:** só o dono e o gerente anulam pedidos, dão descontos e retiram itens já enviados à cozinha. O empregado só retira itens ainda não enviados (para corrigir um toque errado).
- **Exportar fecho:** botão no relatório do dia e no cartão "Dia fechado": guarda um ficheiro .txt no aparelho ou envia por WhatsApp.
- **Dividir conta:** divide o total em partes iguais para 2 a 8 pessoas, com métodos de pagamento independentes (dinheiro, TPA/Multicaixa, transferência/TRF ou Multicaixa Express). O valor residual fica na última parte; vendas e itens são registados uma única vez.
- **Definições e menu:** na skin Corp, as definições estão organizadas em painéis e tabelas; os dados da empresa e o armazenamento local ficam integrados na página. Em **Menu**, cada produto aceita uma fotografia JPG ou PNG, redimensionada e comprimida automaticamente antes de ser guardada e exibida no POS.
- **Talão:** apresenta o nome comercial definido em **Definições → Empresa**.
- **Empresa e impressão:** configura a identificação e o logótipo, imprime recibos, fechos de turno/diários e relatórios mensais, ou guarda documentos numa pasta nos navegadores compatíveis.
- **Skins:** Corp apresenta painéis areia e controlos azuis em relevo, inspirados nos POS clássicos WinREST; Costa's usa uma paleta clássica quente; Biolo apresenta categorias e produtos numa grelha com botões terracota. A escolha é individual por conta.
- **Primeira utilização:** cria o dono e, no primeiro login, configura a empresa antes de começar a usar as mesas.
- Ao mudar de versão, muda o número em `sw.js` (agora `v19`).

## Limites a conhecer
- O executável para Windows pode servir como servidor local e sincronizar aparelhos na mesma rede Wi‑Fi. Sem o executável-servidor, usa **Juntar dados** para transferir vendas e fechos manualmente.
- Guarda as últimas 3000 vendas neste aparelho. O estoque só é fiável com contagens regulares.
- As fontes vêm da Google e ficam em cache depois do primeiro uso online; sem elas usa-se uma fonte do sistema.
- Play Store tem taxa única da Google e App Store taxa anual da Apple; não são precisas para usar a app.

## Atualizar a app
Substitui `index.html` e `sw.js` no alojamento e aumenta o número em `sw.js` (por exemplo, `v18` → `v19`). A app atualiza na abertura seguinte com internet; os dados não se perdem.
