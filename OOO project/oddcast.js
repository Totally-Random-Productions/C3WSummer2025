    var animeList = [1281, 6213, 38000, 53065, 1918, 59845, 59062, 60285, 59459, 696, 20]

    var jikanAPIURL = "https://api.jikan.moe/v4/anime/";

    var cardContainer = document.getElementById("card-container");

    async function getAnimeData(animeID) {
      var response = await fetch(jikanAPIURL + animeID);

      if (response.status != 200) {
        console.log("Error getting data from api")
        return;
      }

      var animeData = await response.json();

      var animeTitleEN = animeData.data.title_english;
      var animeImageURL = animeData.data.images.jpg.image_url
      console.log(animeTitleEN)
    

      var cardTemplate = `
      <div class="card">
        <img src="${animeImageURL}" alt="Avatar" style="width:100%">
        <div class="container"
          <h4><b>${animeTitleEN}</b></h4>
          <br>
          <p></p>
        </div>
      </div>
      `
      var animeDiv = document.createElement("div");
      animeDiv.innerHTML = cardTemplate;
      cardContainer.append(animeDiv);

    }

    for (let i = 0; i < animeList.length; i++) {
      getAnimeData(animeList[i])
    }