var app = require('express')();
app.set('views', __dirname + '/tpl');
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);
app.get('/', function(req,res){
    res.render('home');
    //res.send("hello world");
});
app.listen(8000);
console.log("toado app server is running on port 8000");