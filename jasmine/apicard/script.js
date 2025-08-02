function run(){
    document.getElementById("header").innerHTML=
    "Dragon Ball Z";
}


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
    document.getElementById("dragon").setAttribute("src", data.items[5].image);
    document.getElementById("name").innerHTML=data.items[5].name;
    document.getElementById("race").innerHTML=data.items[5].race;
    document.getElementById("ki").innerHTML=data.items[5].ki;
  }
});
