var loginDiv = document.getElementById("login");
var registerDiv = document.getElementById("register");
var btn = document.getElementById("btn");
const login_btn = document.getElementById("loginbtn");
const register_btn = document.getElementById("registerbtn");
register_btn.classList.add("selectedButton");
const login_submit = document.getElementById("login-Submit");
const register_submit = document.getElementById("register-submit");





function register(){
    loginDiv.style.left = "-400px";
    registerDiv.style.left = "50px";
    btn.style.left = "110px";
    login_btn.classList.add("selectedButton");
    register_btn.classList.remove("selectedButton");
    //get all our input fields
    // username = document.getElementById("userName").nodeValue
    // fName = document.getElementById("fName").nodeValue
    // lName = document.getElementById("lName").nodeValue
    // address = document.getElementById("address").nodeValue
    // city = document.getElementById("city").nodeValue
    // state = document.getElementById("state").nodeValue
    // zip = document.getElementById("zip").nodeValue
    // email = document.getElementById("email").nodeValue


    // if(Validate_email(email) == false || Validate_password(password) == false){
    //     alert("Email or Password don't match")
    //     return
    // }

}


// function Validate_email(email){
//     express = /^[^@]+@\w+(\.\w+)+\w$/
//     if(express.test(email) == true){
//         return true
//     }else{
//         return false
//     }
// }

// function Validate_password(password){
//     if(password < 6){
//        return false 
//     }else{
//         return true
//     }
// }

function login(){
    loginDiv.style.left = "50px";
    registerDiv.style.left = "450px";
    btn.style.left = "0px";
    register_btn.classList.add("selectedButton");
    login_btn.classList.remove("selectedButton");

    // if(Validate_email(email) == false || Validate_password(password) == false){
    //     alert("Email or Password don't match")
    //     return
    // }
    
}

function loginSubmit(){
    location.replace("RockPaperScissors.html");
    console.log("complete")
}

login_btn.addEventListener('click', function(){
login();
})

register_btn.addEventListener('click', function(){
    register();
    })

login_submit.addEventListener('click', function(){
    loginSubmit();
    console.log("is this working")
})

register_submit.addEventListener('click', function(){
    
})

