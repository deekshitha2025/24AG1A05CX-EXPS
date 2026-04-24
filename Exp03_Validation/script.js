// ===== REGISTER =====
function validateRegister(){

let name = document.getElementById("regName").value;
let email = document.getElementById("regEmail").value;
let password = document.getElementById("regPassword").value;
let confirm = document.getElementById("regConfirm").value;

if(name === "" || email === "" || password === "" || confirm === ""){
alert("All fields are required");
return false;
}

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(pattern)){
alert("Invalid Email Format");
return false;
}

if(password.length < 6){
alert("Password must be at least 6 characters");
return false;
}

if(password !== confirm){
alert("Passwords do not match");
return false;
}

// Save data
localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

alert("Registration Successful");

// Redirect to login
window.location.href = "login.html";

return false;
}


// ===== LOGIN =====
function validateLogin(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");

if(email === "" || password === ""){
alert("All fields are required");
return false;
}

if(email !== savedEmail || password !== savedPassword){
alert("Invalid Email or Password");
return false;
}

alert("Login Successful");

return false;
}