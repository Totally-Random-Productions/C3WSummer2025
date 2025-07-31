const info = document.getElementById("card__info");

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
    const goku = data.items[0]; // Goku

    document.getElementById("card__info__name").innerHTML = "Character name: " + goku.name;
    document.getElementById("card__info__race").innerHTML = "Character race: " + goku.race;
    document.getElementById("card__info__gender").innerHTML = "Character gender: " + goku.gender;
    document.getElementById("card__info__power_level").innerHTML = "Power level: " + goku.ki;
    document.getElementById("card__info__max").innerHTML = "Max power level: " + goku.maxKi;
    document.getElementById("goku__image").setAttribute("src", goku.image);

  }
});

getData(dragonball_url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);
    const vegeta = data.items[1]; // Vegeta

    document.getElementById("card__info__name").innerHTML = "Character name: " + vegeta.name;
    document.getElementById("card__info__race").innerHTML = "Character race: " + vegeta.race;
    document.getElementById("card__info__gender").innerHTML = "Character gender: " + vegeta.gender;
    document.getElementById("card__info__power_level").innerHTML = "Power level: " + vegeta.ki;
    document.getElementById("card__info__max").innerHTML = "Max power level: " + vegeta.maxKi;
    document.getElementById("vegeta__image").setAttribute("src", vegeta.image);

  }
});