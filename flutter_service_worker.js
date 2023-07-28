'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/config": "717eb7f7d8388eaf3fbfba8c41ffd7e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4e186bf41d323b9095d5cea655cdce43",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "439630b0950932bc738fbc88d75332cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d659c1dc1317f964532f9109f03ac506",
".git/logs/refs/heads/main": "d659c1dc1317f964532f9109f03ac506",
".git/logs/refs/remotes/origin/main": "a539ad4f86f5b476987a79921bcec57f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0a/0dae7fa9aafe83d69a0b86d11c3aa7d2cd54fe": "d2caff31efdabe8afd9c4cc97427c783",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/7c7bec9330bd0d730d91d2a7a8cd2f345c0058": "2364f18a104ff833ddedf26da16b788c",
".git/objects/17/e6dfb27edb6247df12910af6967e8e6caaa1a0": "10d3e0c917f7e6c5995df269e0b96ca1",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2d/3036a096c82e14c3b8a5368e2de3201bef8ba5": "662ee9239dca9321d17b46749da8d703",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/1a225d677b605c9e94b16b92ff2e53722e360f": "44bc9917772f917db57e79fe5d58bc11",
".git/objects/3f/7f99f49c6450158a135d92252411aa2f00e12c": "2edea6609a3ae50d8b881e044971e252",
".git/objects/4a/325f22b0c118d0da4110171e9c72cd6f290854": "cc3f8d696a05e31a63e15e53a2e52443",
".git/objects/4b/781cc1044d18e8c1027e6af3124ce7fcd8c447": "9dbbcaeb594a88b3be5063b7c1d01114",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/4e/859163521306f4851406149ebb45406a60f95d": "760e44bfdafbb99cc218ccc97c526c23",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/be96ae359dcd7fa6bd8f90ce189b8395eab445": "a84893d23df3db3e2a0cce0c723debf6",
".git/objects/64/9e4a65c7a20c34fdbf288854289ce49419acb8": "faa2769d533dc5b59823ba386c9e2ee3",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/6c/488c6941887b8b904726b8bf0515771bcf6d29": "12aed73383983f6f98d703f48f486476",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/fb39d3e6794ba0fcb5549d67378a6d5ec6337c": "97080faaedd702168dc0cbbf180629da",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/80/a89347494dc053eafd0221de4e1b2dab6f498a": "af5a96e2c68206f65b074342a98c6f90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/40a8a4c943d4c1050be81f84fd85bad0fe3b03": "83a1bf3989b83d2a957f86833077f4a4",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/92/d0ba62b3018f97ba6629128acc02ad19b005a1": "ff6d492f480d205b8610aee954441762",
".git/objects/94/65ce693ac625c01bf820ea6eb140a0f73fff34": "1484517ffacfab26aeef8c5eaf07e2fd",
".git/objects/97/6480adfc09e480593f24b7262579f0201e6f6e": "c78a42c2da30fda24d6d91e0539d4964",
".git/objects/98/5b45ab13091dec999956a0325adf2b20f46771": "0f425e84ae9da17ff9fdf69ca004a06f",
".git/objects/98/d143dc6fb2d74452d303c2da10c54a7e19395b": "ed4061802ed67a7d603022aef5cb287f",
".git/objects/ac/3cd6665ef3b5049c144e886ab6a6a73c8d6426": "ef19c0a9b26f4f1f6e8c91aef5220504",
".git/objects/ac/bf7f13f4e6b505556564ff6d54a156e5aac1ef": "9023c23e0e2f12e44ece77f8c3373b4b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/47fc3e536151851242da54eaf1bb86a532d1d4": "88ecdde08405e13aed224b7ce9caf141",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/3db7b48dcda57b521fc1e50831e17fb8bc401f": "1248f28bc846ee7df082d96b05e17cef",
".git/objects/c2/c5f1cbe69733f392cca975bb4c1b347cec6b7a": "6eee47c0747339ef2a27f05b9e2215db",
".git/objects/c2/ff4b549a52e051674c56fc0942d38806806bb7": "3e0a132d65145ac5ab33d5664e416bb5",
".git/objects/c6/1793e65495a07b53176c48cbce5a2a7096b53a": "8bd7d2d435442bd013b8f125794ca254",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/ca/236ab8a8ab2ac27cf4145fae3ea4b2a3141644": "88c2d23acbc6c2cf549d26d3c7383213",
".git/objects/cc/2f04451254691fe15ddb51a86d691780069b6a": "f3590a0f3d91fe52dec2fcecdec7ef98",
".git/objects/cf/6ed2b2b2bdaa2c5a4cc1951eb7c4117a2fe789": "483ca7516a682dc599c5c473ce9b930c",
".git/objects/cf/c6d43e7a091a7073cd4c83d822a82ac839e78f": "15e5b79084524dffcf3e1ed66dc91535",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/ba679221450659e471ef403acaaa0309383316": "348a8d76c42f35ae7f154688d1998ed6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9cd751a7def7a3086e1e6986c8c10e5695dcba": "191782f63edf3e58594dd2349c79f160",
".git/objects/d7/53e77cee622c6ac27c8925d428c126de9f4430": "eacbee2b8e64ee0738cd3cefbbb72c6c",
".git/objects/dd/00e0013f3bf08a190056bc916f94863d50b020": "1aec4f005d2eb68af8a1750b4e30cd9f",
".git/objects/dd/517f87864f7b0d0b65cf6b2765299f0fc2d9e9": "0929d4709b078eec97a4026591877941",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e5/1a95ea66439082d04ff5c91ab4088d33e2d0f3": "43fd925eb2ea3cda5c1c92e50ebd47fa",
".git/objects/e7/7252d38c24b90ab1cd072f2477092eace5aaee": "678e8f942c27e69034bf776d67a31994",
".git/objects/ea/3b36066086028121815cf9b114bcdad24322a3": "37ad7133827434339ae8f4772ec66dfc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/eacc0810c7c31c963c69118aa41760abf83dc2": "89cdfb4d58f93d0571cd10c533ab9baf",
".git/objects/f6/1eb4e6966a7899b74c93b358b88429633fde65": "ebf5de4a4cc6dd205ff6e31c73388cb1",
".git/objects/fa/baa48457ba7360adc4de5eabd43331dc10f982": "69aa835d8af37d34d5095086616e8783",
".git/objects/fb/e639777a00fbe694da834ffdcbc92558d1fc8a": "b170a725f235775911aac62acba32d73",
".git/ORIG_HEAD": "4edbfbdc3a6aeca79f6483a823972e68",
".git/refs/heads/main": "433f89b65e94fafa0d4aed1974b197b0",
".git/refs/remotes/origin/main": "433f89b65e94fafa0d4aed1974b197b0",
"assets/AssetManifest.bin": "422a940ec64dbb9de7d9677232ee3b72",
"assets/AssetManifest.json": "e9b0cefeee812b12b5f17f5ee2e5bb89",
"assets/FontManifest.json": "0a7d39e5f676f53c22231829a04c5f56",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "23290f057c812f0fdafcf7882ec28901",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e5d461b8a44fdf2ac4297cf2db548931",
"/": "e5d461b8a44fdf2ac4297cf2db548931",
"main.dart.js": "74fd51f84517e3e9646a93684c95862d",
"manifest.json": "c71f18e373d1b7329a5ad9842567ff28",
"version.json": "bc62577a21904f0e9f2e08028349bc92"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
