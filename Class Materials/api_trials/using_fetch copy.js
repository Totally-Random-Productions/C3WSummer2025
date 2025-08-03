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


//Call function with different URLs
getData(dragonball_url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);

    for(let i=0; i<10; i++){
      const oldCard = document.getElementById('card');
      let newCard = oldCard.cloneNode(true);
      newCard.id = "card" + i;

      document.getElementById("image").setAttribute("src" , data.items[i].image);
      document.getElementById("name").innerHTML = data.items[i].name;
      document.getElementById("affiliation").innerHTML = data.items[i].affiliation;
      document.getElementById("ki").innerHTML = data.items[i].ki;
      document.getElementById("description").innerHTML = data.items[i].description;
      document.getElementById("maxKi").innerHTML = data.items[i].maxKi;
      document.getElementById("gender").innerHTML = data.items[i].gender;
      document.getElementById("race").innerHTML = data.items[i].race;
      
      document.body.appendChild(newCard);
    }

  }
});



