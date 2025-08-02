function run(){
    document.getElementById("board").innerHTML=
    "Hello World";
}

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


//Call function with different URLs
getData(dragonball_url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);
    document.getElementById("dragonball").innerHTML="Dragon ball result: " + data.items[5].name;
  }
});

getData(potter_url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);
    document.getElementById("potter").innerHTML="Sample from Harry Potter result: " + data[4].title;
  }
});

getData(doggo_url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);
    document.getElementById("doggo").setAttribute("src" , data.url);
  }
});
