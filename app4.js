/**
 * Created by Maarten on 12-12-2015.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req, res){
    var people = [
        {
            firstname: 'Maarten',
            lastname: 'Siem',
            age: 35,
            email: 'maartensiem@gmail.com'
        },
        {
            firstname: 'Sjakie',
            lastname: 'Zwart',
            age: 58,
            email: 'szwart@gmail.com'
        },
        {
            firstname: 'Maaike',
            lastname: 'Kolk',
            age: 26,
            email: 'maaikek@hotmail.com'
        }
    ];
    res.json(people);
});

app.get('/download', function(req, res){
    res.download(path.join(__dirname, '/downloads/tekstfile.txt'));
});

app.get('/about', function(req, res){
    res.redirect('/about.html');
});

app.post('/subscribe', function(req, res, next){
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + ' has subscribed with '+ email);
});

app.listen(3000, function(){
    console.log('Server is listening on port 3000');
});