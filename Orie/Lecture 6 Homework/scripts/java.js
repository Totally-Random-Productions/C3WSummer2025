function greetUser() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("Age").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("formemail").value;

  var message = `Welcome, ${name}! We see you are ${age} years old and live in ${city}. We will send a confirmation to your email at ${email}.`;

  document.getElementById("output").textContent = message;
}
