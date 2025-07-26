function next1(){
    var name = document.getElementById("name");
    var gender = document.getElementById("gender");
    var hair = document.getElementById("hair")
    var outfit = document.getElementById("outfit");
    var item = document.getElementById("item");
    var p1= document.getElementById("p1")

    name.innerHTML = name.value;
    gender.innerHTML = gender.value;
    hair.innerHTML = hair.value;
    outfit.innerHTML = outfit.value;
    item.innerHTML = item.value;

    p1.innerHTML = "On one cloudy day " + name.value + " finds a invitation for a 'Murder Mystery Game-Night Dinner Party'. After deciding to attend. " + name.value + " make gender.value way to the adress listed in the letter. The adress leads to a masion on top of a hill. As " + name.value + " walks in gender.value is give a role and character to play. When entering the hall you reconize 5 people.";
}