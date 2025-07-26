function createCard() {
    var name = document.getElementById ("name-input");
    var email = document.getElementById ("email-input");
    var age = document.getElementById ("age-input");
    var city = document.getElementById ("city-input");
    var form = document.getElementById ("form_container");

    name.innerHTML = name.value;
    email.innerHTML = email.value;
    age.innerHTML = age.value;
    city.innerHTML = city.value;

    form.innerHTML = "Thanks for filling out our form" + name.value + "! We understand from the information you provided that you are" + age.value + "and you live in" + city.value +". We'll send a confirmation email to you shortly at the email you provided," + email.value + "!";
}