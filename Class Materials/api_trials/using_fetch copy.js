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
    document.getElementById("image").setAttribute("src" , data.items[3].image);
    document.getElementById("name").innerHTML = data.items[3].name;
    document.getElementById("affiliation").innerHTML = data.items[3].affiliation;
    document.getElementById("ki").innerHTML = data.items[3].ki;
    document.getElementById("description").innerHTML = data.items[3].description;
    document.getElementById("maxKi").innerHTML = data.items[3].maxKi;
    document.getElementById("gender").innerHTML = data.items[3].gender;
    document.getElementById("race").innerHTML = data.items[3].race;
  }
});


