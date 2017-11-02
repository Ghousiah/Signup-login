var express=require('express');
var bodyParser=require('body-parser');
var loginController=require('./controllers/loginController');
var registerController=require('./controllers/registerController');

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/register',registerController.register);
app.post('/api/login',loginController.login);

app.listen(8012);