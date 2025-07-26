//JavaScript for build a partner

var nameo = document.getElementById("name-input");
var age = document.getElementById("age-input");
// var genderSelect = document.querySelector('input[name="gender-info"]:checked'); //radio button
var genderBender = document.getElementsByName("gender-info");
var place = document.getElementById("met");
var country = document.getElementById("country");
var height = document.getElementById("height");
var secret = document.getElementById("secret");

var car = document.getElementById("cars"); //dropdown box

//for all my spans
var nameoSpan = document.getElementById("nameValue");
var ageSpan = document.getElementById("ageValue");
var genderselectSpan = document.getElementById("gender");//radio button
var placeSpan = document.getElementById("location");
var countrySpan = document.getElementById("nation");
var heightSpan = document.getElementById("heightValue");
var secretSpan = document.getElementById("shhh");
var carSpan = document.getElementById("whip");


function updatePara() {
  document.body.style.backgroundImage = 'url("img pack/sagura.gif")';
  nameoSpan.innerHTML = nameo.value;
  ageSpan.innerHTML = age.value;

  for (var i = 0, length = genderBender.length; i < length; i++) {
    if (genderBender[i].checked) {
      genderselectSpan.innerHTML = genderBender[i].value;
      break;
    }
  }

  placeSpan.innerHTML = place.value;
  countrySpan.innerHTML = country.value;
  heightSpan.innerHTML = height.value;
  secretSpan.innerHTML = secret.value;

  switch (car.value) {
    case "laferrari":
      carSpan.innerHTML = "LaFerrari";
      break;
    case "mcclaren":
      carSpan.innerHTML = "McClaren";
      break;
    case "mercedes":
      carSpan.innerHTML = "Mercedes";
      break
    case "audi":
      carSpan.innerHTML = "Audi";
      break
    case "porsche":
      carSpan.innerHTML = "Porsche";
      break;
  }
}


function validateItems() {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });



  if (nameo.value === null || nameo.value === "") {
    alert("Put your name in!");
    return false;
  } else if (age.value <= 0 || age.value >= 100 || age.value === null || isNaN(age.value)) {
    alert("Put an appropriate age!");
    return false;
  } else if (place.value === null || place.value == "") {
    alert("Put an appropriate location!");
    return false;
  } else if (country.value === null || country.value === "") {
    alert("Put your name of Country in!");
    return false;
  } else if (height.value <= 54 || height.value >= 250 || height.value === null || isNaN(height.value)) {
    alert("Put an appropriate height!");
    return false;
  } else if (car.value === null || car.value === "" || car.value === "default") {
    alert("Select a car name!");
    return false;
  } else if (!genderBender) {
    let check = genderBender.checked;
    if (!check) {
      alert("Select a gender!");
      return false;
    }
  } else if (secret.value === null || secret.value === "") {
    alert("Put a secret in!");
    return false;
  } else {
    updatePara();
  }
}

function freshStart() {
  location.reload();
}

