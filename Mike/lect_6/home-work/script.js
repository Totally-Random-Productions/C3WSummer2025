function fillStory() {
  const inputs = [
    "inputDesc", "inputAnimal", "inputCountry", "inputAnimal2",
    "inputColor", "inputNumber", "inputFood", "inputAction",
    "inputSong", "inputFeeling1", "inputLanguage", "inputFeeling2"
  ];

  let allFilled = true;

  inputs.forEach(id => {
    const input = document.getElementById(id);
    input.classList.remove("red__border"); // remove red border just in case

    if (input.value.trim() === "") {
      input.classList.add("red__border"); // add red border
      console.log(`${id} is empty`);
      allFilled = false;
    }else {
        input.classList.remove("red__border");
    }
  });

  if (!allFilled) {
    alert("Please fill in all the fields!");
    return;
  }

  // Now safely fill the story
  document.getElementById("descWord").textContent = document.getElementById("inputDesc").value;
  document.getElementById("animal").textContent = document.getElementById("inputAnimal").value;
  document.getElementById("country").textContent = document.getElementById("inputCountry").value;
  document.getElementById("animal2").textContent = document.getElementById("inputAnimal2").value;
  document.getElementById("color").textContent = document.getElementById("inputColor").value;
  document.getElementById("number").textContent = document.getElementById("inputNumber").value;
  document.getElementById("food").textContent = document.getElementById("inputFood").value;
  document.getElementById("action").textContent = document.getElementById("inputAction").value;
  document.getElementById("song").textContent = document.getElementById("inputSong").value;
  document.getElementById("feeling1").textContent = document.getElementById("inputFeeling1").value;
  document.getElementById("language").textContent = document.getElementById("inputLanguage").value;
  document.getElementById("feeling2").textContent = document.getElementById("inputFeeling2").value;
}


function resetStory() {
  document.getElementById("wordForm").reset();

  const ids = [
    "descWord", "animal", "country", "animal2", "color",
    "number", "food", "action", "song", "feeling1",
    "language", "feeling2"
  ];

  ids.forEach(id => {
    document.getElementById(id).textContent = "_____";
  });

  // Clear any red borders
  const inputs = document.querySelectorAll("#wordForm input");
  inputs.forEach(input => input.classList.remove("red__border"));
}

    
   