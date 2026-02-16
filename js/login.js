let inputEmail=document.querySelector("input[type='email']");
let inputPass=document.querySelector("input[type='password']");
let loginBtn=document.querySelector(".button button");

loginBtn.addEventListener("click",function(){
    let usersList=JSON.parse(localStorage.getItem("allUsers"))||[];
    let feedBack=document.querySelector(".button .inValid");
    
    let userFound=usersList.find(user=>{
        return user.email.toLowerCase() === inputEmail.value.toLowerCase() && user.pass === inputPass.value;
    })
    if(userFound){
        localStorage.setItem("userName",userFound.name);
        window.location.href="../html/home.html";
    }else if(inputEmail.value==""||inputPass.value==""){
        feedBack.classList.remove("d-none")
        feedBack.classList.add("d-block")
        feedBack.innerHTML="All inputs are required";
    }else{
        feedBack.classList.remove("d-none")
        feedBack.classList.add("d-block")
        feedBack.innerHTML="Email or Password incorrect";
    }
    inputEmail.value="";
    inputPass.value="";
})