const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

// Case 1. 
divideNumbers(20, 4)
.then(result => console.log("20 / 4", result))
.catch(error => console.log(error));

// Case 2.
divideNumbers(50, 5)
.then(result => console.log("50 / 5", result))
.catch(error => console.log(error));

// Case 3.
divideNumbers(100, 10)
.then(result => console.log("100 / 10", result))
.catch(error => console.log(error));

//  Case 4.
divideNumbers(15, 0)
.then(result => console.log("15 / 0", result))
.catch(error => console.log(error));

// Case 5. 
divideNumbers(81, 9)
.then(result => console.log("81 / 9", result))
.catch(error => console.log(error));