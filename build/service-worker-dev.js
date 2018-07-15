// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.
// See https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
// 修复在IE 9，IE10, IE11中报错问题.
// self.addEventListener('install', () => self.skipWaiting());
// self.addEventListener('activate', () => {
//     self.clients.matchAll({type: 'window'}).then(windowClients => {
//         for (let windowClient of windowClients) {
//             // Force open pages to refresh, so that they have a chance to load the
//             // fresh navigation response from the local dev server.
//             windowClient.navigate(windowClient.url);
//         }
//     });
// });

self.addEventListener('install', function () {
    self.skipWaiting();
});
//
self.addEventListener('activate', function () {
    //
    if(self.clients){
        //
        self.clients.matchAll({type: 'window'}).then(function (windowClients) {
            for (var keyField in windowClients) {
                // Force open pages to refresh, so that they have a chance to load the
                // fresh navigation response from the local dev server.
                var windowClient = windowClients[keyField];
                windowClient.navigate(windowClient.url);
            }
        });
    }
});