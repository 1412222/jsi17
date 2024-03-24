
 

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    
    if (username.value === "") {
      alert("Please enter your username or email address.");
      username.focus(); 
      return false;
    }

 
    if (password.value === "") {
      alert("Please enter your password.");
      password.focus();
      return false;
    }

    
    return true;
  


