function displayInfo() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const city = document.getElementById("city").value.trim();
  const output = document.getElementById("output");

  typeof "black" // returns "string"
  output.style.color = "black";
  output.textContent =  `Welcome,${name}! We see you are ${age} years old and live in ${city}. We will send a confirmation to your email at ${email}`;


   // Bonus: Simple validation
  if (!name || !email || !age || !city || isNaN(age) || age <= 0) {
    output.textContent = "Please fill in all fields with valid information.";
    output.style.color = "red";
    return;
  }

}






 
  
   