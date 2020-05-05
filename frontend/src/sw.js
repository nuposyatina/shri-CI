const CACHE = 'cache-static';

//предварительное кэширование статики
const cacheStatic = () => caches.open(CACHE).then(cache => cache.addAll(['/']));

//обновление данных
const update = (req) => (
  caches.open(CACHE)
    .then((cache) => fetch(req)
    .then((res) => cache.put(req, res)))
);

//пробуем загрузить статику из кэша
const fromCache = (req) => (
  caches.open(CACHE)
    .then((cache) => cache.match(req)
    .then((matching) => matching || Promise.reject('no-match')))
);

//запрашиваем данные по сети
const fromNetwork = (req) => fetch(req);

self.addEventListener('install', (e) => {
  console.log('Installed');
  e.waitUntil(cacheStatic());
});

self.addEventListener('activate', () => {
  console.log('Activated');
});

self.addEventListener('fetch', (e) => {
  console.log('Fetch');
  e.respondWith(
    fromCache(e.request)
      .catch(() => fromNetwork(e.request))
  );
  e.waitUntil(update(e.request));
});
