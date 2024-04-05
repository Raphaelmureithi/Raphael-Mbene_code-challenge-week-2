//write a function that accepts two numbers and generates an array between them
function generateArray(firstNum, lastNum,){
let result = [];
if (firstNum => lastNum) {
    for (let i = firstNum; i <= lastNum; i++) {
        result.push(i);
    }
}else {
    for (let i = firstNum; i >= lastNum; i--) {
        result.push(i);
    }
}
return result;
}
function generateandDisplayArray(){
    const firstNum = parseInt (document.getElementById('firstNum').value);
    const lastNum = parseInt (document.getElementById('lastNum').value);
    const result = generateArray(firstNum, lastNum);
    document.getElementById('output').textContent = "GenerateArray: " + result;
}
