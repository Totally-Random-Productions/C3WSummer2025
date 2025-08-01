
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
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);

    const characters = data.items; 

    characters.forEach(character => {
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