  var animeList =[
  {id:1281, ytLink:"https://youtu.be/kOi5SpwDQR4?si=GYH5xpybjjUJSGzl"},
  {id:6213, ytLink:"https://youtu.be/dKLdA60lUw4?si=BFuNrGrfSlW2N3DR"},
  {id:38000, ytLink:"https://youtu.be/VQGCKyvzIM4?si=PBtKQOlJvweRlBK4"},
  {id:53065, ytLink:"https://youtu.be/w5p-T47FS8Q?si=oJXGbTEqf-o6OMDu"},
  // anime has no trailer plus it's sort of lost media
  {id:1918, ytLink:""},  
  {id:59845, ytLink:"https://youtu.be/1FcVJxxPWh4?si=20aMWnNndcSCc9Ta"},
  {id: 59062, ytLink:"https://youtu.be/yeRvDchyo44?si=EI9DWiHdEt8kjgnf"},
  {id:60285, ytLink:"https://youtu.be/-gmCvxwqcsw?si=jRYSzz1owBB9RSCW"},
  {id:59459, ytLink:"https://youtu.be/0OBF29HoV4A?si=gYZBTOzsrXm9buZe"},
  // tailer is no longer available
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

    var jikanAPIURL = "https://api.jikan.moe/v4/anime/";

    var cardContainer = document.getElementById("card-container");

function truncate(txt, n) {
  if (!txt) return "No synopsis available.";
  return txt.length > n ? txt.slice(0, n).trim() + "…" : txt;
}

    async function getAnimeData(animeID, ytLink) {
      var response = await fetch(jikanAPIURL + animeID);
      

      if (response.status != 200) {
        console.log("Error getting data from api")
        return;
      }

      var animeData = await response.json();

      var animeTitleEN = animeData.data.title_english;
      var animeImageURL = animeData.data.images.jpg.image_url;
      console.log(animeTitleEN);
      var episodes = animeData.data.episodes;
      var status = animeData.data.status;
      var from = animeData.data.from;
      var to = animeData.data.to;
      var synopsis = truncate (animeData.data.synopsis,220);
      var synopsisID = "synopsis"+animeID;
      var topID = "top"+animeID;
    

      var cardTemplate = `
      
        <div class="card" id="card${animeID}" onmouseover=showSynopsis('${synopsisID}','${topID}') onmouseleave=hideSynopsis('${synopsisID}','${topID}')>
        <div id="hover-container">
        <a href="${ytLink}" id="link">
          <img src="${animeImageURL}" alt="Avatar" style="width:100%">
        </a>
        <div class="container"
          <h4><b>${animeTitleEN}</b></h4>
          <br>
          <div id="top${animeID}" style="display:block;">
            <p>Status: ${status} ${from} to ${to} Episodes:${episodes} </p>
          </div>
          <div id="synopsis${animeID}" style="display:none;"> 
            <p> ${status} ${from} to ${to} Episodes:${episodes} ${synopsis}</p>
          </div>
        </div>
        
        
      </div>
      </div>
      `

      var animeDiv = document.createElement("div");
      animeDiv.innerHTML = cardTemplate;
      cardContainer.append(animeDiv);

    }

    for (let i = 0; i < animeList.length; i++) {
      getAnimeData(animeList[i].id, animeList[i].ytLink);
    }

const myElement = document.getElementById('link');

function showSynopsis(sid,tid) {
  // Code to execute when mouse enters the element
  var synopsisEle = document.getElementById(sid);
  var topEle = document.getElementById(tid);
  synopsisEle.setAttribute('style', 'display:block');
  topEle.setAttribute('style', 'display:none');
}

function hideSynopsis(sid,tid) {
  // Code to execute when mouse enters the element
  var synopsisEle = document.getElementById(sid);
  var topEle = document.getElementById(tid);
  //alert(synopsisEle.innerHTML);
  synopsisEle.setAttribute('style', 'display:none');
  topEle.setAttribute('style', 'display:block');
}





