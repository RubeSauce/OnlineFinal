 $(document).ready(function(){

    //Get text from input box 
     
     
     var Username;
     var Password;
     var Email;
     var PhoneNumber;
     var Diary;
     var person = [] ;
     
     $("button#diarySave").hide();
     $("p#diaryP").hide();
     $("form#login").hide();
     $("form#register").hide();
     $("button#loginEnter").hide();
     $("textarea#diary").hide();
     
               $("button#login").click(function(){         
                   $("form#login").show();
                   $("button#loginEnter").show();
                   $("form#register").hide();
               });    
     
          $("button#register").click(function(){  
              
              
               $("form#login").show();
               $ ("form#register").show();
              $("button#loginEnter").hide();
              
               });
     
     
              
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
                  
                 person =  JSON.parse(localStorage.getItem("Person")) || [];
                  
    
                  
                  person.push({
                     Username: Username,
                     Password: Password,
                     Email: Email,
                     PhoneNumber: PhoneNumber,
                     Diary: Diary
                  });
                  
                  
     axios.post('/register',person)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           });

                 
                 
             }
      }) ;   
     
     
     $("button#loginEnter").click(function(e){
         e.preventDefault();
        person =  JSON.parse(localStorage.getItem("Person"))
       //Diary = (localStorage.getItem("Diary"))
      for  ( i = 0 ; i< person.length ; i++) {
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
          
      }
        
                  axios.post('/login',person)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           });

         
         
     });
     
      $("button#diarySave").click(function(){
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
    
         
 });  //i need to make a specific diary connect to the specific person



                   