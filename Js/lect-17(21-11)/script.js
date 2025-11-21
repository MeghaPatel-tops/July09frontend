function registration(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
   
    console.log(username.trim().length);
    

    if(username.trim() == "" ||  email.trim() == "" || pwd.trim() == ""){
        alert("Enter Valid input");
        document.getElementById('username').focus();
        return;
    }
    else{
         localStorage.setItem('ecom-username',username);
         localStorage.setItem('ecom-email',email);
         localStorage.setItem('ecom-pwd',pwd);

         window.location = "login.html"
    }
}

function Login(){
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
     if( email.trim() == "" || pwd.trim() == ""){
        alert("Enter Valid input");
        document.getElementById('username').focus();
        return;
    }

    if(email === localStorage.getItem('ecom-email') && pwd === localStorage.getItem('ecom-pwd')){
        alert("Login successfully");
        localStorage.setItem('ecom-login-email',email);
         localStorage.setItem('ecom-login-pwd',pwd);

        window.location = "index.html";
    }
}

function checkAuth(){
    let str="";
    if(localStorage.getItem("ecom-login-email") &&localStorage.getItem("ecom-login-pwd")){
         str= `<button class="nav-link" aria-disabled="true" onclick="logout()">Logout</button>`
    }
    else{
       str= `<a class="nav-link" aria-disabled="true" href="login.html">Login</a>`
    }
    document.getElementById('auth').innerHTML=str;
}

function logout(){
    localStorage.removeItem('ecom-login-email');
    localStorage.removeItem('ecom-login-pwd');
    window.location="index.html";
}

