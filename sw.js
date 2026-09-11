/* chi-scheduler updater. Bump V on every publish. */
const V="chi-scheduler-1.12";
self.addEventListener("install",function(){self.skipWaiting();});
self.addEventListener("activate",function(e){
  e.waitUntil(self.clients.claim());
});
self.addEventListener("notificationclick",function(e){
  e.notification.close();
  e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(function(list){
    for(const c of list){ if("focus" in c) return c.focus(); }
    if(clients.openWindow) return clients.openWindow("./");
  }));
});
self.addEventListener("fetch",function(e){
  const req=e.request;
  if(req.mode==="navigate"||req.destination==="document"||(req.url||"").indexOf("sw.js")!==-1){
    e.respondWith(fetch(req,{cache:"no-store"}).catch(function(){return caches.match(req);}));
    return;
  }
  e.respondWith(fetch(req,{cache:"no-store"}).catch(function(){return caches.match(req);}));
});
