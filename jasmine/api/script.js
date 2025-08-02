function run() {
  document.getElementById("header").innerHTML =
    "The Metropolitan Museum of Art Collection";
}

const met = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

function getData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

// let i;
for (let i = 45734; i <= 45740; i = i + 1) {
  var extended = met + "/" + i;
  console.log(extended);

  getData(extended,
    function (err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        console.log(data);

        const main = document.getElementById("container");

        //div
        const divVer = document.createElement("div");
        main.appendChild(divVer);
        divVer.classList.add("items");
        divVer.id = "itemDiv" + i;
        // const sec = document.getElementById("itemDiv");

        //image
        const imgGer = document.createElement("img");
        divVer.appendChild(imgGer);
        imgGer.id = "imagery" + i;
        if (data.primaryImage === null | data.primaryImage === "") {
          imgGer.src = 'img pack/none.jpg';
        } else {
          imgGer.src = data.primaryImage;
        }
        

        //paragraph - Title with span
        const para = document.createElement("p");
        divVer.appendChild(para);
        para.id = "paragraph" + i;
        const substance = document.getElementById(para.id);
        substance.innerHTML = "Title: " + data.title;
        // const spanner = document.createElement("span");
        // substance.appendChild(spanner);
        // spanner.id = "title";
        // document.getElementById("title").innerHTML = data.title;
        
        

        //paragraph - Artist Name with span
        const paraOne = document.createElement("p");
        divVer.appendChild(paraOne);
        paraOne.id = "paraOne" + i;
        const substanceOne = document.getElementById(paraOne.id);
        substanceOne.innerHTML = "Artist Name: " + data.artistAlphaSort;
        // const spannerOne = document.createElement("span");
        // substanceOne.appendChild(spannerOne);
        // spanner.id = "artnameo";
        // document.getElementById("artnameo").innerHTML = data.artistAlphaSort;
        
        
        //paragraph - Period of Creation with span
        const paraTwo = document.createElement("p");
        divVer.appendChild(paraTwo);
        paraTwo.id = "paraTwo" + i;
        const substanceTwo = document.getElementById(paraTwo.id);
        substanceTwo.innerHTML = "Accession Year:  " + data.accessionYear;
        // const spannerTwo = document.createElement("span"); 
        // substanceTwo.appendChild(spannerTwo);
        // spanner.id = "period";
        // document.getElementById("period").innerHTML = data.period;
       

        //button
        const refer = document.createElement("button");
        divVer.appendChild(refer);
        refer.id = "reference";
        refer.textContent = "See Artpiece";
        refer.addEventListener("click", function () {
          const piece = data.objectURL;
          window.location.href = piece;
        })
      
      }
    });


}

