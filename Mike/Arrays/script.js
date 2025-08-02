

// let numArr = [2,4,6,8,10];
// numArr.forEach(number => {
//     const squaredNumbers = number * number;
//     const div = document.getElementById("container");
//     const para = document.createElement("p");
//     para.textContent = `The sqrt of ${number} is ${squaredNumbers}`;
//     para.classList.add("result");
//     div.appendChild(para);
//     document.body.appendChild(div);
// });


let numArr = [10,20,30,40];

const div = document.getElementById("container");

for(let i = 0; i < numArr.length; i++) {
    
    const sqrtNum = numArr[i];
    const squareRoot = Math.sqrt(sqrtNum);

    const para = document.createElement("p");
    para.textContent = `The square root of ${sqrtNum} is ${squareRoot}`;

    para.classList.add("result");
    div.appendChild(para);
    document.body.appendChild(div);
};

const title = document.querySelector(".title")
title.style.textAlign = "center";