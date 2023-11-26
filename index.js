function add(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("Invalid input: Please provide numbers");
            }
        }, 1000);
    });
}

function subtract(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a - b);
            } else {
                reject("Invalid input: Please provide numbers");
            }
        }, 1000);
    });
}

function multiply(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a * b);
            } else {
                reject("Invalid input: Please provide numbers");
            }
        }, 1000);
    });
}

function divide(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number' && b !== 0) {
                resolve(a / b);
            } else {
                reject("Invalid input: Please provide valid numbers and ensure the divisor is not zero");
            }
        }, 1000);
    });
}

function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    Promise.all([
        add(num1, num2),
        subtract(num1, num2),
        multiply(num1, num2),
        divide(num1, num2)
    ]).then(results => {
        document.getElementById('result').innerHTML = `
            <p>Addition: ${results[0]}</p>
            <p>Subtraction: ${results[1]}</p>
            <p>Multiplication: ${results[2]}</p>
            <p>Division: ${results[3]}</p>
        `;
    }).catch(error => {
        document.getElementById('result').innerHTML = "<p>Error: ${error}</p>";
    });
}

