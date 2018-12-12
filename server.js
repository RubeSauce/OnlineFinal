const express = require('express');
const app = express();
var data = express();

app.use(express.static('public'));
app.use(express.json()); 
                                 
                                 
    var users = [];
    
    app.get('/',function(req,res){
   res.render('index', {
    title: 'Users',
       users: users
});
});

    
    app.post('/', function(req,res){
    req.checkBody('username', 'Username is Required').notEmpty();
      req.checkBody('password', 'Password is Required').notEmpty();
      req.checkBody('email', 'Email is Required').notEmpty();

    
     var errors = req.validationErrors();
    if(errors){
         res.render('index', {
    title: 'Users',
       users: users,
             errors: errors
});

    
     var newUser = {
       username: req.body.Username,
        password: req.body.Password,
        email: req.body.Email,
         phoneNumber: req.body.PhoneNumber
       }
            console.log('SUCCESS');
   }
   console.log(newUser);
});


app.get('/',function(req,res){
   res.render('index', {
    title: 'Users',
       users: users
});
});

app.post('/', function(req,res){
    req.checkBody('Username', 'Username is required').notEmpty();
      req.checkBody('Password', 'Password is Required').notEmpty();
      req.checkBody('Email', 'Email is Required').notEmpty();                             
                                 
                                 
          var errors = req.validationErrors();
    if(errors){
         res.render('index', {
    title: 'Users',
       users: users,
             errors: errors
});
       console.log('ERRORS');
       }else {
            var newUser = {
       username: req.app.Username,
        password: req.app.Password,
        email: req.app.Email,
        phoneNumber: req.app.PhoneNumber
       }
            console.log('SUCCESS');
   }
   console.log(newUser);
});                           
                                 
                                 
                                                                 
app.listen(3000, () => { console.log('Server Started...');
});