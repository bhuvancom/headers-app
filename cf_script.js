addEventListener("fetch", event => {
event.respondWith(doRedirects(event.request))
})
const newLocationHost = "developers.cloudflare.com";
async function doRedirects(request) {
let reqUA = req.headers.get('user-agent')
if (reqUA.matches('curl').true) {
let newLocation = "https://"+newLocationHost
return Response.redirect(newLocation, 302)
}
return fetch(request);
}
