

let numArr = [2,4,6,8,10];
numArr.forEach(number => {
    const squaredNumbers = number * number;
    const div = document.getElementById("container");
    const para = document.createElement("p");
    para.textContent = `The sqrt of ${number} is ${squaredNumbers}`;
    para.classList.add("result");
    div.appendChild(para);
    document.body.appendChild(div);
});