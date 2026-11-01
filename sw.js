/* Costa's POS: guarda o app no aparelho para abrir sem internet.
   Ao mudar o index.html, muda também o número da versão abaixo. */
const VERSAO = 'costas-pos-v23';
const BASE = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);

  // Fontes da Google: guarda a primeira vez e usa depois, mesmo sem internet
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(VERSAO).then(c =>
        c.match(r).then(hit => {
          const rede = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) c.put(r, res.clone()); return res; }).catch(() => hit);
          return hit || rede;
        })
      )
    );
    return;
  }

  if (u.origin !== location.origin) return;

  // Página: tenta a rede (apanha versões novas) e cai para o que está guardado
  if (r.mode === 'navigate') {
    e.respondWith(
      fetch(r).then(res => { const cp = res.clone(); caches.open(VERSAO).then(c => c.put('index.html', cp)); return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(r).then(hit => hit || fetch(r).then(res => { const cp = res.clone(); caches.open(VERSAO).then(c => c.put(r, cp)); return res; }))
  );
});
