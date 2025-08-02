var response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/1");
var json = await response.json();
console.log(json);