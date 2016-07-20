
var express = require('express');
var app = express();
//app.set('views', __dirname + '/tpl');
//app.set('view engine', 'pug');
//app.engine('pug', require('pug').__express);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
    res.render('index.html')
});

app.listen(8000);
console.log("toado app server is running on port 8000");