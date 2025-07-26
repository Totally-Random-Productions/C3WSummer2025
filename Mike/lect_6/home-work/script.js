 function fillStory() {
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
      const ids = ["descWord", "animal", "country", "animal2", "color", "number", "food", "action", "song", "feeling1", "language", "feeling2"];
      ids.forEach(id => document.getElementById(id).textContent = "_____");
    }