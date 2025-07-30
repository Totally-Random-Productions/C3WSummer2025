  const nameInput = document.getElementById("name");
    const placeInput = document.getElementById("place");
    const animalInput = document.getElementById("animal");
    const updateBtn = document.getElementById("updateBtn");
    const resetBtn = document.getElementById("resetBtn");

    updateBtn.addEventListener("click", () => {
      document.getElementById("storyName").textContent = nameInput.value || "";
      document.getElementById("storyPlace").textContent = placeInput.value || "";
      document.getElementById("storyAnimal").textContent = animalInput.value || "";

      // Weather radio
      const weather = document.querySelector('input[name="weather"]:checked');
      document.getElementById("storyWeather").textContent = weather ? weather.value : "";

      // Powers checkbox
      let powers = [];
      if (document.getElementById("flight").checked) powers.push("Flying");
      if (document.getElementById("invisible").checked) powers.push("Invisibility");
      document.getElementById("storyPowers").textContent = powers.length > 0 ? powers.join(" and ") : "no powers";
    });

    resetBtn.addEventListener("click", () => {
      nameInput.value = "";
      placeInput.value = "";
      animalInput.value = "";
      document.getElementById("flight").checked = false;
      document.getElementById("invisible").checked = false;
      document.querySelector('input[name="weather"][value="sunny"]').checked = true;

      document.getElementById("storyName").textContent = "";
      document.getElementById("storyPlace").textContent = "";
      document.getElementById("storyAnimal").textContent = "";
      document.getElementById("storyWeather").textContent = "";
      document.getElementById("storyPowers").textContent = "";
    });