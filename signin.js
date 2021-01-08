

    var form = document.getElementById('form');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var errorMessage = document.getElementById("error");
    let Message;

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        errorMessage.style.visibility= 'visible';
    
        setTimeout(()=>{
        errorMessage.style.visibility= 'hidden';
        },3000)

    
    if(username.value == ""){
        Message = "username can't be blanket"
        errorMessage.innerHTML = Message;
    return false
    } 
    
    if(username.value.length <= 6){
        Message = "username must be at least 6 char long"
        errorMessage.innerHTML = Message;
        return false;
    }
    
    if(password.value == ""){
        Message = `password can't be blanket`
        errorMessage.innerHTML = Message;
        return false;
    } else if(password.value.length <= 6){
        Message = `password must be at least 6 char long`
        errorMessage.innerHTML = Message;
        return false;
    }
        alert("Thank you for filling the form. We will give you a feedback soon")
    return true;
    })  
