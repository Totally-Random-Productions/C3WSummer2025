function updatePara() {
  document.getElementById("preview").style.visibility = "visible";
  
  var name = document.getElementById("name-input");
  var email = document.getElementById("email-input");
  var city = document.getElementById("city-input");
  var age = document.getElementById("age-input");

  var para = document.getElementById("paragraph");

  para.innerHTML =
    "Welcome, " +
    name.value +
    "! We see you are " +
    age.value +
    " years old and live in " +
    city.value +
    ". We will send a confirmation to your email at " +
    email.value;
}

function valid(mail) {
  const input = document.createElement("input");
  input.type = "email";
  input.value = mail;
  return input.checkValidity();
}

function validateItems() {

  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
  });

  var name = document.getElementById("name-input");
  var email = document.getElementById("email-input");
  var city = document.getElementById("city-input");
  var age = document.getElementById("age-input");

  if (name.value === null || name.value === "") {
    alert("Put your name in!");
    return false;
  } else if (
    age.value <= 0 ||
    age.value >= 100 ||
    age.value === null ||
    isNaN(age.value)
  ) {
    alert("Put an appropriate age!");
    return false;
  } else if (city.value === null || city.value == "") {
    alert("Put an appropriate City of Residence!");
    return false;
  } else if (
    !valid(email.value) ||
    email.value === "" ||
    email.value === null
  ) {
    alert("Put an Valid Email!");
    return false;
  }else{
    updatePara();
  }
} 

function freshStart(){
    let purr = document.getElementById("preview");
    purr.style.visibility='hidden';
}
 

