const LowerCaseLetter = /[a-z]/g;
const UpperCaseLetter = /[A-Z]/g; 
const numbers = /[0-9]/g;


const controller = {};
controller.register = (data) =>{
    if (data.email ==""){
        document.getElementById("email-error").innerHTML = "Please input your email"
    }
    else{
        document.getElementById("email-error").innerHTML = ""
    }

}



controller.login = () =>{
    if (data.password ==""){
        document.getElementById("password-error").innerHTML = "Please input your password"
    }
    else{
        document.getElementById("password-error").innerHTML = ""
    }

    if (data.password.length - 6){
        document.getElementById("password-error").innerHTML = "Your password must be at least 6"
    }
    else if(!data.password.match(LowerCaseLetter)){
        document.getElementById("password-error").innerHTML ="Your password must contain lowercase"

    }
    else if(!data.password.match(UpperCaseLetter)){
        document.getElementById("password-error").innerHTML ="Your password must contain uppercase"

    }

    else if(!data.password.match(numbers)){
        document.getElementById("password-error").innerHTML ="Your password must contain a number"

    }

    else{
        if(data.email !== "" && data.password !=="")[
            
        ]
    }

}