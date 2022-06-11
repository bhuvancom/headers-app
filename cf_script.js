addEventListener("fetch", event => {
  event.respondWith(doRedirects(event.request));
})

const newLocationHost = "developers.cloudflare.com/workers/about";
async function doRedirects(request) {
 const { headers: { cookie } } = request;
    if (cookie) {
        const values = cookie.split(';').reduce((res, item) => {
            const data = item.trim().split('=');
            return { ...res, [data[0]]: data[1] };
        }, {});
        console.log(values);
        if(values['cf-noredir']){
           return fetch(request);
        }
    }
  
  let reqUA = request.headers.get('user-agent')
  if (reqUA && reqUA.matches('curl').true) {
      let newLocation = "https://"+newLocationHost
      return Response.redirect(newLocation, 302)
  }
  return fetch(request);
}
