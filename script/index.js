const express = require('express');
const app = express();

app.get('/headers', function(req, res){
    const headers = req.headers;
    // const { headers: { cookie } } = req;
    // if (cookie) {
    //     const values = cookie.split(';').reduce((res, item) => {
    //         const data = item.trim().split('=');
    //         return { ...res, [data[0]]: data[1] };
    //     }, {});
    //     console.log(values);
    //     if(values['username-localhost-8888']){
    //         console.log('it should bypass');
    //     }
    // }

    res.send(headers);
 });
app.get('/secure',function(req,res){
    if(req.headers.user && req.header.user == 'AKASH'){
        const headers = req.headers;
        res.send(headers);
    } else {
        res.status(403).send('{"msg":"You are not authorized to view this page"}');
    }
});

 function getcookie(req) {
    var cookie = req.headers.cookie;
    // user=someone; session=QyhYzXhkTZawIb5qSl3KKyPVN (this is my cookie i get)
    return cookie.split('; ');
}
const PORT = 3000;
 app.listen(PORT,() => {
     console.log('listening on ' + PORT);
 });
