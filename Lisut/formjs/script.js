function replaceText(){
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var city = document.getElementById("city");
    var email = document.getElementById("email");
    var formDiv = document.getElementById("form");

    name.innerHTML = name.value;
    age.innerHTML = age.value;
    city.innerHTML = city.value;
    email.innerHTML = email.value;

    formDiv.innerHTML = "Thank you for completing this form " + name.value + "! We see you are " + age.value + " years old and live in " + city.value + ". We will send a confirmation to your email at " + email.value + ".";
}
