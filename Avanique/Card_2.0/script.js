function run(){
    document.getElementById("title-page").innerHTML=
    "Dragon Ball-Z Player Cards";
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

function number_submission(){
    const number_chosen = document.getElementById("number");
    if((number_chosen.value == "") || (number_chosen.value<1)){
        alert("Invalid Number");
        return false;
    }

    //Call function with different URLs
    getData(dragonball_url,
    function(err, data) {
    if (err !== null) {
    alert('Something went wrong: ' + err);
    } else {
        console.log(data);
    //document.getElementById("dragonball").innerHTML="Dragon ball result: " + data.items[8].name;

        for( let i=0;i<number_chosen.value;i++){
        ///
            let player_card_div = document.createElement('div');
            player_card_div.id = 'player-info';
            player_card_div.className = 'player-info';
        /// 
            let newdata = document.createElement('h1');
            newdata.innerHTML = "DragonBall Z";
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

            newdata = document.createElement('span');
            newdata.innerHTML = "Name: "+ data.items[i].name;
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

        ///
            newdata = document.createElement('span');
            newdata.innerHTML = "Race: "+ data.items[i].race;
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

            newdata = document.createElement('span');
            newdata.innerHTML = "Ki: "+ data.items[i].ki;
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

            newdata = document.createElement('span');
            newdata.innerHTML = "MaxKi: "+ data.items[i].maxKi;
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

            newdata = document.createElement('span');
            newdata.innerHTML = "Gender: "+ data.items[i].gender;
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

            newdata = document.createElement('span');
            newdata.innerHTML = "Affiliation: "+ data.items[i].affiliation;
            player_card_div.appendChild(newdata);
            player_card_div.appendChild(document.createElement('br'));

            new_img = document.createElement('img');
            new_img.setAttribute('src', data.items[i].image);
            player_card_div.appendChild (new_img);
            player_card_div.appendChild(document.createElement('br'));

            document.getElementById("player-card-info").appendChild(player_card_div);
        ///

    }
    //set attribute for images thats what we use

    //objects will be involved in the hw

    //generate several cards at once using loops with javascript
  }
});

}

