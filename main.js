
    var form = document.getElementById('form');
    var fname = document.getElementById('name');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var errorMessage = document.getElementById("error");
    let Message;

form.addEventListener('submit', (e)=>{
        e.preventDefault();
 errorMessage.style.visibility= 'visible';
 
   setTimeout(()=>{
    errorMessage.style.visibility= 'hidden';
   },3000)

   
if( fname.value === ""){
   Message = "full name can't be blanket"
   errorMessage.innerHTML = Message;
    return false;
   } 
   if(fname.value.length <= 9){
      Message = "full name must be at least 9 char long"
   errorMessage.innerHTML = Message;
    return false;
   }

if(username.value === "" || username.value.length <= 5){
    Message = "username can't be blanket"
    errorMessage.innerHTML = Message;
   return false
   } 
    
if(email.value === ""  || email.value.length <= 5){
       Message = `enter the valid email address`
       errorMessage.innerHTML = Message;
       return false;
   } 
   
   if(password.value == ""){
      Message = `password can't be blanket`
      errorMessage.innerHTML = Message;
     return false;
   } 
    if(password.value.length <= 6){
    Message = `password must be at least 6 char long`
    errorMessage.innerHTML = Message;
    return false;
   }
   if(password != password2){
    Message = `second Password doesn't match the first password`
    errorMessage.innerHTML = Message;
    return false;
   } else if(password == password2){
      Message= `Password matched`;
      errorMessage.innerHTML= Message;
      errorMessage.style.backgroundColor= 'green';
      return false;
   } 
   alert("Thank you for filling the form .We will give you a feedback soon")
       return true;
})



    
 
   