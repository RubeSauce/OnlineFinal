const express = require('express');
const app = express();
var data = express();





app.use(express.static('public'));
app.use(express.json()); 
                                 
// Array of the users
 var users = [];
   // base of the website
    app.get('/',function(req,res){
   res.render('index', {
    title: 'Users',
       users: users
});
});

    // Register section of the website
    app.post('/register', function(req,res){
     /*var newUser = {
       username: req.body.Username,
        password: req.body.Password,
        email: req.body.Email,
         phoneNumber: req.body.PhoneNumber
       };*/
            console.log('SUCCESS');
        
   users.push(req.body);
        
   console.log(users);
        
});

//Login section of the website
app.post('/login', function(req,res){
                    
     for  (let i = 0 ; i< users.length ; i++) {
          
         console.log(users[i]);
         console.log(users[i].Password);
          
           Username = req.body.Username;
           Password = req.body.Password;
          
         
         
          if (Password == users[i].Password && Username == users[i].Username) {
             
             let login = {Username,Password};
             res.send(login);
              
              console.log("approved")
             
         }
          
          else {
               
          }
          
          let Login = {Username,Password};
         
          
          
      }

     
});     
// Diary section of the website
        app.post('/diary', function(req,res){
                    
     for  ( let i = 0 ; i< users.length ; i++) {
          
         console.log(users[i]);
         console.log(users[i].Diary);
          
           Username = req.body.Username;
           Password = req.body.Password;
           Diary = req.body.Diary;
         
         
          if (Password == users[i].Password && Username == users[i].Username) {
             
             users[i].Diary = Diary; 
             let serverLogin = {Username,Password,Diary};
              
              
              
             res.send(serverLogin);
              
             
            
              
              console.log("approved")
             
         }
          
        
      }

     
});                          
  /*app.post('/diary', function(req,res){
     
      for  (let i = 0 ; i< users.length ; i++) {
          
      console.log(users[i]);
      console.log(users[i].Diary);
          
      Username = req.body.Username;
      Password = req.body.Password;
      Diary = req.body.Diary;
          
    if (Password == users[i].Password && Username == users[i].Username) {
             
              let serverDiary = {Diary};
             res.send(serverDiary);
              
              console.log("approved")
             
         }  
      else {
               
          }
          
      let serverDiary = {Diary};
      
      
          users.push(req.body.Diary);
      }
  });       */                        
         





app.listen(3000, () => { console.log('Server Started...');
});
