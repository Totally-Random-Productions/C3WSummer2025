var animeList = [ , , , , ,,  ,, ,,
 ,,, , ,];

  var animeList =[


  {id:1281, ytLink:""},
    {id:6213, ytLink:""},
      {id:38000, ytLink:""},
        {id:53065, ytLink:""},
          {id:1918, ytLink:""},  
          {id:59845, ytLink:""},
            {id: 59062, ytLink:""},
              {id:60285, ytLink:""},
                {id:59459, ytLink:""},
                  {id: 696, ytLink:""},
                    {id:20, ytLink:"https://youtu.be/-G9BqkgZXRA?si=X5q4B5Y8sklP6236"},
                      {id:2107, ytLink:""},
                        {id: 22319, ytLink:""},
                          {id:11061, ytLink:""},
                            {id:31964, ytLink:""},
                              {id:32281, ytLink:""},
                                {id:49596, ytLink:""},
                                  {id: 47917, ytLink:""},


  ];

  var ytLinks = [ ]

    var jikanAPIURL = "https://api.jikan.moe/v4/anime/";

    var cardContainer = document.getElementById("card-container");

    async function getAnimeData(animeID, ytLink) {
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
        <a href="${ytLink}">
        <div class="card">
        <img src="${animeImageURL}" alt="Avatar" style="width:100%">
        <div class="container"
          <h4><b>${animeTitleEN}</b></h4>
          <br>
          <p></p>
        </div>
      </div>
      </a> 
      `
      var animeDiv = document.createElement("div");
      animeDiv.innerHTML = cardTemplate;
      cardContainer.append(animeDiv);

    }

    for (let i = 0; i < animeList.length; i++) {
      getAnimeData(animeList[i].id, animeList[i].ytLink);


    



    }
