
 function infoReplace() {

    var nameUserElement = document.getElementById("name");
    var nameBlankElement = document.getElementById("name-blank");
    nameBlankElement.innerHTML = nameUserElement.value;

     var emailUserElement = document.getElementById("email");
    var emailBlankElement = document.getElementById("email-blank");
    emailBlankElement.innerHTML = emailUserElement.value;

     var ageUserElement = document.getElementById("age");
    var ageBlankElement = document.getElementById("age-blank");
    ageBlankElement.innerHTML = ageUserElement.value;

     var cityUserElement = document.getElementById("city");
    var cityBlankElement = document.getElementById("city-blank");
    cityBlankElement.innerHTML = cityUserElement.value;

    }

    
    function displayText() {
        var text = document.getElementById("info-text");
        text.style.display = "block";
    }