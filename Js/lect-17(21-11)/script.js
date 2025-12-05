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
    let cartstr= "";
    if(localStorage.getItem("ecom-login-email") &&localStorage.getItem("ecom-login-pwd")){
         str= `<button class="nav-link" aria-disabled="true" onclick="logout()">Logout</button>`
        cartstr= `<a class="nav-link" aria-disabled="true" href="cart.html">Cart</a>`
    }
    else{
       str= `<a class="nav-link" aria-disabled="true" href="login.html">Login</a>`
    }
    document.getElementById('auth').innerHTML=str;
    document.getElementById('cart').innerHTML=cartstr;
}

function logout(){
    localStorage.removeItem('ecom-login-email');
    localStorage.removeItem('ecom-login-pwd');
    window.location="index.html";
}

async function getProduct(cb){
    let res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();
    console.log(products);
    cb(products)
    
}

function showProduct(data){
    console.log("inshow",data);
    
    let str="";
    data.map((index)=>{
        let shortTitle = index.title.length > 15 
            ? index.title.substring(0, 15) + "..." 
            : index.title;
         str+= `
           <div class="col-xl-4 mt-2">
                    <div class="card">
                        <div class="card-header">
                            <img src="${index.image}" alt="">
                        </div>
                        <div class="card-body">
                            <h3>${shortTitle}</h3>
                            <hr>
                            <h4>${index.price}</h4>
                            <hr>
                            <button class="btn btn-primary" onclick="addtocart(${index.id})" type="button">Addtocart</button>
                        </div>
                    </div>
                </div>`
    });
    document.getElementById('prodata').innerHTML=str;


}

async function addtocart(pid){
     let username = localStorage.getItem('ecom-login-email');
     let res = await fetch('https://fakestoreapi.com/products/'+pid);
    let product = await res.json();
   alert('cart-'+username)
     if(localStorage.getItem('cart-'+username)){
        let cartArray = localStorage.getItem('cart-'+username);
        cartArray = JSON.parse(cartArray);
        cartArray.push(product)
        localStorage.setItem("cart-"+username,JSON.stringify(cartArray));
     }  
     else{
        let cartArray = [];
        cartArray.push(product);
        localStorage.setItem("cart-"+username,JSON.stringify(cartArray));
     }
}



function cartView(){
    let username = localStorage.getItem('ecom-login-email');

    if(localStorage.getItem('cart-'+username)){
        let cartStr = localStorage.getItem('cart-'+username);
       
        let cartArray = JSON.parse(cartStr);
         console.log(cartArray);
        let str="";
        if(cartArray.length>0){
            let total=0;
            cartArray.map((index)=>{
                total+=index.price;
                str +=` <tr>
                            <td>${index.title}</td>
                            <td>  <img src="${index.image}" alt="" height="100px" width="100px"></td>
                            <td>${index.price}</td>
                            <td>1</td>
                            <td>${index.price*1}</td>
                        </tr>`
            })

            str+= ` <tr>
                        <th colspan="5" align="right">Total:=${total}</th>
                     </tr>`

        }
        else{
            str+= ` <tr>
                        <td colspan="5" align="center">No Data Found</td>
                     </tr>`
        }

        document.getElementById('cartdata').innerHTML=str;
       
        
    }
    else{
       
        str= ` <tr>
                        <td colspan="5" align="center">No Data Found</td>
                </tr>`
        

        document.getElementById('cartdata').innerHTML=str;
    }
}
