var app = require('express')();

app.get('/', function(req, res) {
    res.json({ message: 'Hello World!' });
})

app.get('/test', function(req, res) {
    res.json({ message: 'test' });
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})