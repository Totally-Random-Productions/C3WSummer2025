function run(){
    document.getElementById("card1").innerHTML=
    "";
}

const doggo_url = 'https://random.dog/woof.json?ref=public_apis'; 





function getData(url, callback){
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

getData(doggo_url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data);
    document.getElementById("doggo").setAttribute("src" , data.url);
  }
});
