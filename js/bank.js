document.getElementById("login-submit").addEventListener("click", function(){
    //get email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    //check email and password
    if(userEmail == "shontan@gmail.com" && userPassword == "secret"){

        //below code is for going to another page.
        window.location.href = "banking.html";
    }
})

