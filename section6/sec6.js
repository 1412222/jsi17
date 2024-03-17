import {
    createUserWithEmailAndPassword ,
    sendEmailVerification,
    signOut,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

import { auth  } from "./firebase";
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    const data = {
        email :  registerForm.email.value.trim() ,

        password : registerForm.password.value

    }

    let dataclean = controller.register(data)
    createUserWithEmailAndPassword(dataclean.email, dataclean.password)
    .then (async(userCredential)=>{
        const user = userCredential.user;
        await  sendEmailVerification (user);

        await signOut (auth);

        alert ("Please verify your email")

        location.href = "../login.html"
})
.catch (error => {
    console.log(error);
    const errorCode = error.code 
    const errorMessage = error.message 
    console.log(errorCode  , errorMessage);
    alert (errorCode)

}) 

})