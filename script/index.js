const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("It's working");
});
app.get('/headers', function(req, res){
    const headers = req.headers;
    res.send(headers);
 });
app.get('/secure',function(req,res){
        res.send('{"msg":"You are authorized by cloudflare to see this page."}');
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
