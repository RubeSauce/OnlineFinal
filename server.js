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


app.post('/login', function(req,res){
                    
     for  ( i = 0 ; i< users.length ; i++) {
          
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
               alert("ID not found");
          }
          
          let Login = {Username,Password};
         
          axios.post('/login',user)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           });
          
      }

     
});                           
                                 
  app.post('/diary', function(req,res){
      
      console.log(users[i]);
      console.log(users[i].Diary);
      Diary = req.body.Diary;
      
      let serverDiary = {Diary};
      
      axios.post('/diary',user)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           });
          users.push(req.body.Diary);
  });                               
         





app.listen(3000, () => { console.log('Server Started...');
});