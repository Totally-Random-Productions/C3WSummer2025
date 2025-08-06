let h1Element = document.querySelector("h1");
h1Element.firstChild.nodeValue = "Hello World!";
h1Element.style.color = "yellow";

let pElements = document.querySelectorAll("p");
// Alternative way to change the color of all <p> elements
// Uncomment the following lines to use a different method


// querySelectorAll returns a NodeList, which is not an array but can be iterated over. NodeList has .forEach built in.
// using forEach or converting it to an array.
// getElementsByTagName returns a collection that is live and can be iterated over directly. It does not have .forEach built in, so you would need to convert it to an array first or use a for loop. 

function stripeParagraphs(color1, color2) {
  document.querySelectorAll("p").forEach((el, i) => {
    el.style.color = i % 2 === 0 ? color1 : color2;
  });
}
stripeParagraphs("lightblue", "black");

let pElementsInDivs = document.querySelectorAll("div p");
for (let elements of pElementsInDivs) {
  elements.style.color = "lightblue";
  elements.style.fontFamily = "Arial, sans-serif";
};

let specialP = document.querySelectorAll("p");
specialP[1].style.color = "#fff";
specialP[1].style.fontWeight = "bold";

// pElements.forEach((element, index) => {
//     if (index % 2 === 0) {
//         element.style.color = "lightblue";
//     } else {
//         element.style.color = "black";
//     }
// });

// pElements[1].style.color = "black";

const divElement = document.getElementsByClassName("white__bg");
divElement[0].style.backgroundColor = "white";
divElement[0].style.padding = "1rem";


// for (let i = pElements.length - 1; i >= 0; i--) {
//     pElements[i].style.color = "lightblue";
// }


// Array.from(pElements).forEach((element) => {
//     element.style.color = "lightblue";
// });


// for (let element of pElements) {
//     element.style.color = "lightblue";
// }

