
const dragonball_url = 'https://dragonball-api.com/api/characters'; 


function getData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getData(dragonball_url,
function(err, data) {
  if (err !== null) {
    const errMsg = document.createTextNode('Something went wrong: ' + err);
    document.getElementById("error").appendChild(errMsg);
    // alert('Something went wrong: ' + err);
  } else {
    const mainTitle = document.getElementById("main-title");
    mainTitle.textContent = "Welcome to the Dragon Ball Z Universe";
    console.log(data);

    // Get the data from the response
    const characters = data.items; 

    // Filter the characters to get only Goku, Vegeta, and Gohan
    const selected = characters.filter(character => ["Goku", "Vegeta", "Gohan"].includes(character.name));

    // selected.forEach(character => {
    //   console.log(`Name: ${character.name}, Race: ${character.race}`);
    // });

    // Loop through the characters and create cards
    selected.forEach(character => {
      const card = document.createElement("div");
      card.classList.add("inner__card");  
      card.innerHTML = `
        <div class="card__image__container">
          <img id="card__image" class="my__image" src="${character.image}" alt="A pic of ${character.name}">
        </div>
        <div id="card__info" class="card__info">
          <p id="card__info__name">${character.name}</p>
          <p id="card__info__race">${character.race}</p>
          <p id="card__info__power__level"> Ki: ${character.ki}</p>
          <p id="card__info__description"> Max Ki: ${character.maxKi}</p>
        </div>
      `;
      document.getElementById("card-container").appendChild(card);
    });

  }
});