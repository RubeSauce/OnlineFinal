 $(document).ready(function(){

    //Get text from input box 
     
     
     var Username;
     var Password;
     var Email;
     var PhoneNumber;
     var Diary;
     var person = [] ;
     //starts the page as a register or login screen
     $("button#diarySave").hide();
     $("p#diaryP").hide();
     $("form#login").hide();
     $("form#register").hide();
     $("button#loginEnter").hide();
     $("textarea#diary").hide();
     // Login button shows everything needed for the login
               $("button#login").click(function(){         
                   $("form#login").show();
                   $("button#loginEnter").show();
                   $("form#register").hide();
               });    
       // Register button shows everything needed for the register
          $("button#register").click(function(){  
              
              
               $("form#login").show();
               $ ("form#register").show();
              $("button#loginEnter").hide();
              
               });
     //different themes for your Diary
          $("button#christmas").click(function(){
            document.body.style.bakground = "red";  
          })
     
     
     //  It makes sure that the fields are filled out and if they are valid it saves that persons information
          $("button#registerEnter").click(function(e){
                $ ("form#register").hide();
              $("form#login").hide();
            e.preventDefault();
             if ( $("#username").val()== "" ||  $("#email").val() == "" ||  $("#password").val() == "" || $("#phoneNumber").val() == "") {
                 alert("Please Fill out the Fields");
                       
              } else {
                 
                    Username = $("#username").val();
                   Password = $("#password").val();
                  Email = $("#email").val();
                  PhoneNumber = $("#phoneNumber").val();
                  Diary = $("textarea#diary").val();
                  
                 
                  
    //packages the information in "user"
                  let user = {Username,Password,Email,PhoneNumber,Diary};
        
                 
                  
      // sends the "register to the server"            
     axios.post('/register',user)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           });

                 
                 
              }
      }) ;   
     
     
      // saves the Login, Username and password   
     $("button#loginEnter").click(function(e){
         e.preventDefault();
         
         Username = $("#username").val();
         Password = $("#password").val();
         
         let Login = {Username,Password};
         
         
        // lets server see the "login" 
                  axios.post('/login',Login)
         .then(function(response) {
                      
               console.log(response.data);
          // Shows the login screen            
            $("button#diarySave").show();
            $("p#diaryP").show();
            $("form#login").hide();
            $("form#register").hide(); 
            $("button#loginEnter").hide();
            $("textarea#diary").show();
            $("button#register").hide();
            $("button#login").hide();
                      
            console.log("approved")
           })
         
         
            .catch(function(error){
               console.log(error);
           });
              
     });
     // Sends the server the "diary"
    $("button#diarySave").click(function(e){
         e.preventDefault();
        
         Username = $("#username").val();
         Password = $("#password").val();
         Diary = $("#diary").val();
        
          let serverDiary = {Username,Password,Diary};
        
        axios.post('/diary',serverDiary)
         .then(function(response) {
          
     console.log(response.data)
        })
        
        .catch(function(error){
               console.log(error);
           });
        
        });
    
       //Diary = (localStorage.getItem("Diary"))
     /* for  ( i = 0 ; i< person.length ; i++) {
         console.log(person[i]);
          console.log(Password);
           Username = $("#username").val();
                   Password = $("#password").val();
          if (Password == person[i].Password && Username == person[i].Username) {
              
             console.log("approved")
              $("button#diarySave").show();
            $("p#diaryP").show();
            $("form#login").hide();
            $("form#register").hide(); 
            $("button#loginEnter").hide();
            $("textarea#diary").show();
            $("button#register").hide();
            $("button#login").hide();
         }
          
          else {
               alert("ID not found");
          }
          
      }*/
        
                
     
      /*$("button#diarySave").click(function(){
            Diary = $("textarea#diary").val();
          localStorage.setItem("Diary",Diary);
 });
     
     
     
       function loadSettings() {
           // $("button#username").val(localStorage.getItem("Username"));
            //$("button#password").val(localStorage.getItem("Password"));
           $("textarea#Diary").val(localStorage.getItem("Diary"));
            $("Person").val();
        }
        function saveSettings() {
            var Username = document.getElementById(Username).value;
            var Password = document.getElementById(Password).value;
            var Diary = document.getElementById(Diary).value;
            localStorage.setItem("Username",Username)
            localStorage.setItem("Password",Password)
            localStorage.setItem("Diary",Diary)
          
        }
    
  */       
 });  //i need to make a specific diary connect to the specific person



            


                   