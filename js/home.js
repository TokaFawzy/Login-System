let logOutBtn=document.querySelector(".log-out button");
let userSpan=document.getElementById("user")
let name=localStorage.getItem("userName");
userSpan.innerHTML=name;
logOutBtn.addEventListener("click",function(){
    localStorage.removeItem("userName");
    window.location.href="../html/login.html";
})
