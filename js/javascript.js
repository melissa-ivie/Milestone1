function checkvalue(){
    var firstName = document.getElementById('firstName').value;
    
    if(firstName == ""){
        alert("The first name can't be null");
        return;
    }
    
    var lastName= 
        document.getElementById('lastName').value;
       if(lastName == ""){
        alert("The last name can't be null");
           return;
    }
     var email= 
        document.getElementById('email').value;
       if(email == ""){
        alert("The email can't be null");
        return;
    }
    var confirmemail= 
        document.getElementById('confirmEmail').value;
       if(confirmEmail == ""){
        alert("The must be confirmed");
        return;
    }
    
    if(!validateEmail(email) || email != confirmemail){
        alert("The email was invalid.");
        return;
    }
    
    alert("Your form was submitted! Check your email for the liability waiver.")
   
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}