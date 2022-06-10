const express = require('express');
const app = express();

app.get('/', function(req, res){
    const headers = req.headers;
    res.send(header);
});

const PORT = 3000;

 app.listen(PORT,() => {
     console.log('listening on ' + PORT);
 });
