function showStory(){
    var size_chosen = document.querySelector('input[name="describing-word"]:checked');
    if(!size_chosen){
        alert("Missing Size");
        return false;
    }

    var animal_chosen = document.querySelector('input[name="animal"]:checked');
    if(!animal_chosen){
        alert("Missing Animal");
        return false;
    }

    var number_chosen = document.getElementById("number")
    if((number_chosen.value == "") || (number_chosen.value<1)){
        alert("Invalid Number");
        return false;
    }

    var food_chosen = document.querySelector('input[name="food"]:checked');

    if(!food_chosen){
        alert("Missing Food");
        return false;
    }

    var action_chosen = document.querySelector('input[name="action"]:checked');

    if(!action_chosen){
        alert("Missing Action");
        return false;
    }

    var music_chosen = document.querySelector('input[name="genre"]:checked');

    if(!music_chosen){
        alert("Missing Genre");
        return false;
    }

    var emotion_chosen = document.querySelector('input[name="feeling"]:checked');

    if(!emotion_chosen){
        alert("Missing Emotion");
        return false;
    }

    var language_chosen = document.querySelector('input[name="language"]:checked');

    if(!language_chosen){
        alert("Missing Language");
        return false;
    }

    var outcome_chosen = document.querySelector('input[name="feeling2-input"]:checked');
    
    if(!outcome_chosen){
        alert("Please answer final question");
        return false;
    }

    document.getElementById("feel2-span").onclick = addHappySpan;
    document.getElementById("lang-span").onclick = changeLanguageSpan;
    document.getElementById("feeling-span").onclick = changeEmotionSpan;
    document.getElementById("music-span").onclick = changeMusicSpan;
    document.getElementById("action-span").onclick = changeActionSpan;
    document.getElementById("food-span").onclick = changeFoodSpan;
    document.getElementById("number-span").onclick = changeNumberSpan;
    document.getElementById("colour-span").onclick = changeColourSpan;
    document.getElementById("animal-span2").onclick = changeAnimalSpan;
    document.getElementById("animal-span").onclick = changeAnimalSpan;
    document.getElementById("db-span").onclick = changeSizeSpan;
    
    var story_page = document.getElementById("story");
    story_page.style.display = "flex";

}

function changeSizeSpan(){
     var size_chosen = document.querySelector('input[name="describing-word"]:checked');

     var spanElement = document.getElementById("db-span");

    if(size_chosen.value == "big"){
        spanElement.style.fontSize = "100px";
        spanElement.innerHTML = "BIG";
    }else{
        spanElement.style.fontSize = "10px";
        spanElement.innerHTML = "small";
    }
}

function changeAnimalSpan(){
    var animal_chosen = document.querySelector('input[name="animal"]:checked');

    var spanElement1 = document.getElementById("animal-span");
    var spanElement2 = document.getElementById("animal-span2");

    if(animal_chosen.value == "elephant"){
        spanElement1.innerHTML = '<img src="elephant.png" alt="Elephant" style="height: 100px; width: 100px;">';
        spanElement2.innerHTML = '<img src="elephant.png" alt="Elephant" style="height: 100px; width: 100px;">';
    }else{
        spanElement1.innerHTML = '<img src="mouse2.png" alt="Mouse" style="height: 100px; width: 100px;">';
        spanElement2.innerHTML = '<img src="mouse2.png" alt="Mouse" style="height: 100px; width: 100px;">';
    }
}

function changeColourSpan(){
    var colour_chosen = document.getElementById("colour").value;
    var spanElement = document.getElementById("colour-span");

    spanElement.style.color = colour_chosen;
    spanElement.innerHTML = "coloured";
}

function changeNumberSpan(){
    var number_chosen = document.getElementById("number").value;
    var spanElement = document.getElementById("number-span");

    spanElement.style.fontSize = (number_chosen) + "px";
    spanElement.innerHTML = number_chosen;
}

function changeFoodSpan(){
    var food_chosen = document.querySelector('input[name="food"]:checked');

    var spanElement = document.getElementById("food-span");

    if(food_chosen.value == "bananas"){
        spanElement.innerHTML = '<img src="bananas.png" alt="Bananas" style="height: 100px; width: 100px;">';
    }else{
        spanElement.innerHTML = '<img src="cheese.png" alt="Cheese" style="height: 100px; width: 100px;">';
    }
}

function changeActionSpan(){
    var action_chosen = document.querySelector('input[name="action"]:checked');

    var spanElement = document.getElementById("action-span");

    if(action_chosen.value == "fly"){
        spanElement.innerHTML = "🕊️";
        spanElement.style.fontSize = "65px";
    }else{
        spanElement.innerHTML = "🏃";
        spanElement.style.fontSize = "65px";
    }
}

function changeMusicSpan(){
    var music_chosen = document.querySelector('input[name="genre"]:checked');

    var spanElement = document.getElementById('music-span');

    if(music_chosen.value == "r&b"){
        spanElement.innerHTML = '<audio controls autoplay><source src="sad_song.mp3" type="audio/mpeg"></audio>';
    }else{
          spanElement.innerHTML = '<audio controls autoplay><source src="angry.mp3" type="audio/mpeg"></audio>';
    }
}

function changeEmotionSpan(){
    var emotion_chosen = document.querySelector('input[name="feeling"]:checked');

    var spanElement = document.getElementById("feeling-span");

    if(emotion_chosen.value == "sad"){
        spanElement.innerHTML = "SAD";
        spanElement.style.color = "#F0FFFF";
        story.style.backgroundColor = "#89CFF0";
    }else {
        spanElement.innerHTML = "ANGRY";
        spanElement.style.color = "#f08080";
        story.style.backgroundColor = "#ffa8a8";
    }
}

function changeLanguageSpan(){
    var language_chosen = document.querySelector('input[name="language"]:checked');

    var spanElement = document.getElementById("lang-span");

    if(language_chosen.value == "french"){
        spanElement.innerHTML = ' <span style="color:blue;background-color:dodgerblue;">Fr</span><span style="color:white;background-color:dodgerblue;">en</span><span style="color:red;background-color:dodgerblue;">ch</span>';
        spanElement.style.backgroundColor ="dodgerblue";
    }else{
        spanElement.innerHTML = '<span style="color:white;background-color:dodgerblue;">Ru</span><span style="color:blue;background-color:dodgerblue;">ss</span><span style="color:red;background-color:dodgerblue;">ian</span>';
        spanElement.style.backgroundColor="dodgerblue";
    }
}

function addHappySpan(){
    var outcome_chosen = document.querySelector('input[name="feeling2-input"]:checked');

    var spanElement = document.getElementById("feel2-span");

    if(outcome_chosen.value){
        spanElement.innerHTML = '<img src="happy.gif" alt="happy" style="height: 300px; width: 300px;">'
    }
}

function clearData(){
    //radio button clearing
    const radio_input = document.querySelectorAll('input[type=radio]');

    radio_input.forEach(radio => radio.checked = false);

    //number button clearing and colour
    document.getElementById("number").value="";
    document.getElementById("colour").value = "#000000";

    //story 

    document.getElementById("db-span").style = "";
    document.getElementById("db-span").innerHTML = "click here";

    document.getElementById("animal-span").innerHTML = "click here";
    document.getElementById("animal-span2").innerHTML = "click here";

    document.getElementById("colour-span").style = "";
    document.getElementById("colour-span").innerHTML = "click here";

    document.getElementById("number-span").style = "";
    document.getElementById("number-span").innerHTML = "click here";

    document.getElementById("food-span").innerHTML = "click here";

    document.getElementById("action-span").innerHTML = "click here";

    document.getElementById("music-span").innerHTML = "click here";

    document.getElementById("feeling-span").innerHTML = "click here";

    document.getElementById("lang-span").innerHTML = "click here";

    document.getElementById("feel2-span").innerHTML = "click here";

    document.getElementById("story").style.backgroundColor ="";

    document.getElementById("story").style.display = "none";

}
