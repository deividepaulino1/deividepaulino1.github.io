'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "53d882721e6912e30262e95080e9ecc5",
"assets/assets/calendar_fake.json": "19ad42eb252cd2ef842374c6fd2d30ab",
"assets/assets/fonts/Montserrat-Black.otf": "561246a3549d3b797b4b611652a79d7c",
"assets/assets/fonts/Montserrat-Bold.otf": "9c71d42b6a840ecfda8fc555040a1c76",
"assets/assets/fonts/Montserrat-ExtraBold.otf": "433ac418a603294fc5891dde6a73cd24",
"assets/assets/fonts/Montserrat-ExtraLight.otf": "2ec7cecb19c1b42ca9ca709971016156",
"assets/assets/fonts/Montserrat-Light.otf": "d4a8834fa8f57f0929b9f4ef89584361",
"assets/assets/fonts/Montserrat-Medium.otf": "d815b0a29adf3450c55f56e2fb813be4",
"assets/assets/fonts/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/fonts/Montserrat-Thin.otf": "cb2144b361907d6549a80a5203f07347",
"assets/assets/images_dj/dj-error-page.png": "e77d173579c10a5cc861f724cac27126",
"assets/assets/images_dj/error.png": "969ad3162687a70515812fe224610b00",
"assets/assets/images_dj/man_helper.png": "e968a20a6be53087f76bf510fa734313",
"assets/assets/images_dj/success_create_like.png": "edeab2056259f0c33aa14f7faf9739df",
"assets/assets/images_dj/sucess.png": "edeab2056259f0c33aa14f7faf9739df",
"assets/assets/images_dj/warning_women.png": "969ad3162687a70515812fe224610b00",
"assets/assets/login/facebookIcon.png": "a9de342c132a3fd4cfceac876597e5aa",
"assets/assets/login/googleIcon.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/logotipo/logo-branco.png": "b0561912e23bec70657d11b1c584272f",
"assets/assets/logotipo/logotipo.png": "c167138c1678baebd1f80d72d382c39d",
"assets/FontManifest.json": "85bf5e59d701ca22ca5b3a748f218d31",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "10d10ebf66df7d6e2826bcd5a55ea84a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cupim_flutter_sdk/assets/calendar_fake.json": "0ad1c9bfd89d7935c03d7f5ae4ed55a8",
"assets/packages/cupim_widgets/assets/images_dj/error.png": "969ad3162687a70515812fe224610b00",
"assets/packages/cupim_widgets/assets/images_dj/man_helper.png": "e968a20a6be53087f76bf510fa734313",
"assets/packages/cupim_widgets/assets/images_dj/success_create_like.png": "edeab2056259f0c33aa14f7faf9739df",
"assets/packages/cupim_widgets/assets/images_dj/sucess.png": "edeab2056259f0c33aa14f7faf9739df",
"assets/packages/cupim_widgets/assets/images_dj/warning_women.png": "969ad3162687a70515812fe224610b00",
"assets/packages/cupim_widgets/assets/svg/alert.svg": "e4d683d8a7c77acf7c4015a167bc9a24",
"assets/packages/cupim_widgets/assets/svg/sucesso.svg": "0e3ad5b85f9a0c4b5ce7330999c8992d",
"assets/packages/dj_styles/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf": "c7ef29737ac0c81becc51ffbd2d6feed",
"assets/packages/dj_styles/assets/fonts/Montserrat-VariableFont_wght.ttf": "a3fcdff002f26cdf718968593b0d9e47",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd28510cf7bef0c81450008a1ce21838",
"/": "fd28510cf7bef0c81450008a1ce21838",
"main.dart.js": "3260e433a87bfa50264862e76574e2aa",
"manifest.json": "4f54f78808bcf329c87266059b067059",
"version.json": "d926e32bc8ddb5d89156d285cc99ba89"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
