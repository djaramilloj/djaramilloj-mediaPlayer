const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // solo querriamos cachear los gets ya que los posts, puts, patchs, ect llevan datos y deben seguir el flujo de internet
    if(request.method !== 'GET') {
        return;
    }
    // buscar en cache si ya tenemos los asets
    event.respondWith(cachedResponse(request)),

    // actualizar cache
    event.waitUntil(updateCache(request));
})

async function precache () {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/plugins/AutoPause.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/index.js',
        // '/assets/mediaPlayer.js',
        // '/assets/index.css',
        // '/assets/ejercicio.mov',
    ])
}


async function cachedResponse (request) {
    const cache = await caches.open(VERSION);
    const response =await cache.match(request);
    return response || fetch(request);
}


async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}