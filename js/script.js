let inputName=document.querySelector("input[type='text']");
let inputEmail=document.querySelector("input[type='email']");
let inputPass=document.querySelector("input[type='password']");
let signUpBtn=document.querySelector(".button button");

const pattern={
    name:/^[a-z]([a-z0-9]|(\s[a-z0-9])){5,19}$/i,
    email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
    pass:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}
function validation(input,regex){
    if(regex.test(input.value)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}
inputName.addEventListener("input",()=>validation(inputName,pattern.name))
inputEmail.addEventListener("input",()=>validation(inputEmail,pattern.email))
inputPass.addEventListener("input",()=>validation(inputPass,pattern.pass))
signUpBtn.addEventListener("click",function(){
    let feedBack=document.querySelector(".button .inValid");
    let inputs=document.querySelectorAll(".is-invalid");
    if(inputEmail.value==""|| inputName.value==""|| inputPass.value==""){
        feedBack.classList.remove("d-none");
        feedBack.classList.add("d-block");
    }else if(inputs.length>0){
        feedBack.innerHTML="Fix errors in inputs";
        feedBack.classList.remove("d-none");
        feedBack.classList.add("d-block");
    }else{
        let usersList = JSON.parse(localStorage.getItem("allUsers")) || [];
        let isExist=usersList.find(user=>{
            return user.email.toLowerCase() === inputEmail.value.toLowerCase() ||
            user.name.toLowerCase() === inputName.value.toLowerCase()
        })
        if(isExist){
            feedBack.innerHTML="User is already exist";
            feedBack.classList.remove("d-none");
            feedBack.classList.add("d-block");
        }else{
            let newUser = {
                name: inputName.value,
                email: inputEmail.value,
                pass: inputPass.value
            };
            usersList.push(newUser);
            localStorage.setItem("allUsers", JSON.stringify(usersList));
            feedBack.innerHTML = "Registration Successful!";
            feedBack.classList.add("text-success")
            feedBack.classList.remove("d-none");
            feedBack.classList.add("d-block");
        }
    }
    inputName.value = "";
    inputEmail.value = "";
    inputPass.value = "";
})






