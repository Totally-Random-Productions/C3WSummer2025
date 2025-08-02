function infoReplace() {
    var adjectiveInputElement = document.getElementById("adjectiveInput");
    var adjectiveEmptyElement = document.getElementById("adjectiveEmpty");
    adjectiveEmptyElement.innerHTML = adjectiveInputElement.value;

    var adjectiveEmptyElementTitle = document.getElementById("adjectiveEmptyTitle");
    adjectiveEmptyElementTitle.innerHTML = adjectiveInputElement.value;

    var animalInputElement = document.getElementById("animalInput");
    var animalEmptyElement = document.getElementById("animalEmpty");
    animalEmptyElement.innerHTML = animalInputElement.value;

  var animalEmptyElementTwo = document.getElementById("animalEmptyTwo");
    animalEmptyElementTwo.innerHTML = animalInputElement.value;

 var animalEmptyElementTitle = document.getElementById("animalEmptyTitle");
    animalEmptyElementTitle.innerHTML = animalInputElement.value;

    var countryInputElement = document.getElementById("countryInput");
    var countryEmptyElement = document.getElementById("countryEmpty");
    countryEmptyElement.innerHTML = countryInputElement.value;

       var countryEmptyElementTitle = document.getElementById("countryEmptyTitle");
    countryEmptyElementTitle.innerHTML = countryInputElement.value;

    var colourInputElement = document.getElementById("colourInput");
    var colourEmptyElement = document.getElementById("colourEmpty");
    colourEmptyElement.innerHTML = colourInputElement.value;

    var numberInputElement = document.getElementById("numberInput");
    var numberEmptyElement = document.getElementById("numberEmpty");
    numberEmptyElement.innerHTML = numberInputElement.value;

    var foodsInputElement = document.getElementById("foodsInput");
    var foodsEmptyElement = document.getElementById("foodsEmpty");
    foodsEmptyElement.innerHTML = foodsInputElement.value;

    var actionInputElement = document.getElementById("actionInput");
    var actionEmptyElement = document.getElementById("actionEmpty");
    actionEmptyElement.innerHTML = actionInputElement.value;

     var songInputElement = document.getElementById("songInput");
    var songEmptyElement = document.getElementById("songEmpty");
    songEmptyElement.innerHTML = songInputElement.value;

    var firstFeelingInputElement = document.getElementById("firstFeelingInput");
    var firstFeelingEmptyElement = document.getElementById("firstFeelingEmpty");
    firstFeelingEmptyElement.innerHTML = firstFeelingInputElement.value;

    var languageInputElement = document.getElementById("languageInput");
    var languageEmptyElement = document.getElementById("languageEmpty");
    languageEmptyElement.innerHTML = languageInputElement.value;

    var secondFeelingInputElement = document.getElementById("secondFeelingInput");
    var secondFeelingEmptyElement = document.getElementById("secondFeelingEmpty");
    secondFeelingEmptyElement.innerHTML = secondFeelingInputElement.value;
}




function displayText() {
     var textPar = document.getElementById("infoText");
     var textTitle = document.getElementById("storyTitle");
     var textStory = document.getElementById("formInput")
     var storyInputDiv = document.getElementById("storyBody")
     var completeStory = document.getElementById("storyComplete")
     textPar.style.display = "block";
     textTitle.style.display = "block";
     textStory.style.display = "none";
     storyInputDiv.style.display = "none";
     completeStory.style.display = "block"
}



function resetLoop() {var ids = ["adjectiveInput","animalInput", "countryInput", "colourInput", "numberInput", "foodsInput", "actionInput", "songInput", "firstFeelingInput", "languageInput", "secondFeelingInput", "infoText"];

for(let i=0; i<ids.length; i++){
    document.getElementById(ids[i]).value = "";
}

}

function changeBackground() {
    var colour = document.getElementById('colourInput').value

    const storyDiv = document.getElementById('storyComplete');
    var colorValue = "background-color: " + colour;
    storyDiv.setAttribute('style', colorValue);
}

// function changeFlag(fileName) {


//     if(document.getElementById("languageInput").value = "German") {
//         console.log("speaks german") 
//     let img = document.querySelector('englishFlag');
//     img.setAttribute('src', fileName);
//     }
    // else if (document.getElementById("languageInput").value = "English") {
    //     console.log("speaks english")
    // }
    //   else if (document.getElementById("languageInput").value = "French") {
    //     console.log("speaks french")
    // }
    //   else if (document.getElementById("languageInput").value = "Spanish") {
    //     console.log("speaks spanish")
    // }
  

// }

// if(languageInput == "English") {
//     console.log("speaks english")
//    englishFlag.style.display = "block";
// }
