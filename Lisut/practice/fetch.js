const dragonball_url = 'https://dragonball-api.com/api/characters'; 
const potter_url = 'https://potterapi-fedeperin.vercel.app/en/books '; 
const doggo_url = 'https://random.dog/woof.json?ref=public_apis'; 

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

    for (let i = 0; i < 7; i++) {
      const oldCard = document.getElementById("card");
      let newCard = oldCard.cloneNode(true);
      newCard.id = "card" + i;

      document.getElementById("card-title").innerHTML = data.items[i].name;
      document.getElementById("card-text").innerHTML = "Ki: " + data.items[i].ki +" Max ki: " + data.items[i].maxKi + " Race: " + data.items[i].race;
      document.getElementById("pic").setAttribute("src",data.items[i].image);

      document.body.appendChild(newCard);
    }
  }

});
