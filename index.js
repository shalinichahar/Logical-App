let secretNumber;
let attempts;

function startGame() {
secretNumber = Math.floor(Math.random() * 100) + 1; 
openModal();
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    attempts++;
    if (userGuess == secretNumber) {
        alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        closeModal();
    } else if (userGuess < secretNumber) {
        alert('Number is low! Try again.');
    } else {
        alert('Number is high! Try again.');
    }
document.getElementById('userGuess').value = ''; 
}

//promise
function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const promise = new Promise((resolve, reject) => {
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 !== 0) {
                    resolve(num1 / num2);
                } else {
                    reject("Cannot divide by zero");
                }
                break;
            default:
                reject("Invalid operation");
        }
    });

    promise.then(result => {
        document.getElementById('result').innerHTML = `<p>Result: ${result}</p>`;
    }).catch(error => {
        document.getElementById('result').innerHTML = `<p>Error: ${error}</p>`;
    });
}

function performSetOperation(operation) {
    const set1 = document.getElementById('set1').value;
    const set2 = document.getElementById('set2').value;

    const promise = new Promise((resolve, reject) => {
        switch (operation) {
            case 'intersect':
                const arr1 = set1.split(',').map(val => val.trim());
                const arr2 = set2.split(',').map(val => val.trim());
                const result = arr1.filter(value => arr2.includes(value));
                resolve(result.join(', '));
                break;
            case 'union':
                const arr1Union = set1.split(',').map(val => val.trim());
                const arr2Union = set2.split(',').map(val => val.trim());
                const resultUnion = Array.from(new Set([...arr1Union, ...arr2Union]));
                resolve(resultUnion.join(', '));
                break;
            default:
                reject("Invalid set operation");
        }
    });

    promise.then(result => {
        // document.getElementById('result').innerHTML = `<p>Result: ${result}</p>`;
        document.getElementById('result2').innerHTML = `<p>Result: ${result}</p>`;
    }).catch(error => {
        document.getElementById('result').innerHTML = `<p>Error: ${error}</p>`;
    });
}

// first 2 rows
const inputs = document.querySelectorAll('.numbers');
const sumBtn = document.getElementById('sumBtn');
const outputA = document.getElementById('output-add');
const sumError = document.getElementById('sumMsg');

const minusBtn = document.getElementById('minus-button');
const outputS = document.getElementById('output-minus');
const inputs2 = document.querySelectorAll('.numbers2');

const divisionBtn = document.getElementById('division-button');
const outputD = document.getElementById('output-division');
const inputs3 = document.querySelectorAll('.numbers3');

const modulusBtn = document.getElementById('modulus-button');
const outputM = document.getElementById('output-modulus');
const inputs4 = document.querySelectorAll('.numbers4');

const factorailBtn = document.getElementById('factorial-button');
const outputF = document.getElementById('output-factorial');
const inputF = document.getElementById('numberF');

let inp = document.getElementById('inputarr1');
let inp2= document.getElementById('inputarr2');
const add = document.getElementById('add');
const add2 = document.getElementById('add2');
const display = document.getElementById('display');
const display2 = document.getElementById('display2');
const displayVal = document.getElementById('par');
const displayVal2 = document.getElementById('par2');
const resultO = document.getElementById('union-output');
const unionBtn = document.getElementById('union');

function calculateSumOfInputs( input1, input2){
    const sum = input1 + input2;
    return sum;
}
function calculateMinusOfInputs(input1, input2){
    const minus = input1 - input2;
    return minus;
}
function calculateDivisionOfInputs(input1, input2){
    const division = input1/input2;
    return division;
}
function calculateModulusOfInputs(input1, input2){
    const modulus = input1%input2;
    return modulus;
}
function calculateFactorialOfInput(value){
    let result = 1;
    for(let i = 1; i<=value; i++){
        result *= i;
    }
    return result;
}
function showOutput (){
    const sumOfNumbers = calculateSumOfInputs(Number(inputs[0].value), Number(inputs[1].value));
    if(inputs[0].value=='' || inputs[1].value=='' ){
        sumError.innerText = "Please fill both input fields"
    }
    if(sumOfNumbers){
        outputA.innerHTML = "The sum of input values is : " + sumOfNumbers;
    }    
}

function substraction(){
    const minusOfNumbers = calculateMinusOfInputs(Number(inputs2[0].value), Number(inputs2[1].value));
    if(minusOfNumbers){
        outputS.innerHTML = "The minus of input values is : " + minusOfNumbers;
    }  
}
function division(){
    const divisionOfNumbers = calculateDivisionOfInputs(Number(inputs3[0].value), Number(inputs3[1].value));
    if(divisionOfNumbers){
        outputD.innerHTML = "The division of input values is : " + divisionOfNumbers;
    }  
}
function modulus(){
    console.log(Number(inputs4[0].value))
    const modulusOfNumbers = calculateModulusOfInputs(Number(inputs4[0].value), Number(inputs4[1].value));
    if(modulusOfNumbers){
        outputM.innerHTML = "The modulus of input values is : " + modulusOfNumbers;
    }  
}
function factorial(){
    console.log(Number(inputF.value))
    const factorialOfNumber = calculateFactorialOfInput(Number(inputF.value));
    console.log(factorialOfNumber);
    if(factorialOfNumber){
        outputF.innerHTML = "The factorial of input value is : " + factorialOfNumber;
    } 
}
let values = [];
let values2 = [];
let result = [];
function addEl(){   
    values.push(inp.value);
    inp.value = ""; 
}

function addEl2(){   
    values2.push(inp2.value);
    inp2.value = "";  
}

function displayArray(){
    displayVal.innerHTML=values.join(",");
}

function displayArray2(){
    displayVal2.innerHTML=values2.join(",");
}

function unionResult(){
    console.log(values)
    for(let i=0;i<values.length; i++){
        if(!result.includes(values[i])){
          result.push(values[i]);
      }
    } 
    for(let i=0;i<values2.length;i++){
        if(!result.includes(values2[i])){
          result.push(values2[i]);
      }
    }
    console.log(result)
    resultO.innerHTML = result.join(",");
}

sumBtn.addEventListener("click", showOutput);
minusBtn.addEventListener('click', substraction );
divisionBtn.addEventListener('click', division);
modulusBtn.addEventListener('click', modulus);
factorailBtn.addEventListener('click', factorial);
add.addEventListener('click', addEl);
add2.addEventListener('click', addEl2);
display.addEventListener('click', displayArray);
display2.addEventListener('click', displayArray2);
unionBtn.addEventListener('click', unionResult);

