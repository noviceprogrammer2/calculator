
// math operators
function addition(input1, input2) {
    return (input1 + input2)
}

function subtraction(input1, input2) {
    return (input1 - input2)
}

function multiplication(input1, input2) {
    return (input1 * input2)
}

function division(input1, input2) {
    if (input2 == 0) {
        console.log('Hey! Cannot divide by zero')
        return
    }
    else {
        return input1 / input2
    }
}



let value = document.getElementById('displayValue')
console.log(value)
let numberArray = new Array
console.log(numberArray)
let storageArray = new Array

// handling input
function input(num) {
    numberArray.push(num.value)
    console.log(numberArray.join(''))
    value.textContent = numberArray.join('')

}

// adding operators to string when operator buttons are pressed 
function additionStorage() {
    // handles cases in beginning when no number is in calculator
    if (storageArray.length == 0){
        console.log('0 length is triggered')
        // pushes display value to storage value as not stored yet
        storageArray.push(parseFloat(value.textContent))
        // pushes operation
        storageArray.push('+')
        console.log(storageArray)
        // empties number array for new number 
        numberArray = []
    }
    // if storedvalue[] has a number and an operator in array
    else if (storageArray.length == 2) {
        console.log('triggered length 2 condition')
        console.log(storageArray)
        // adds display text to storedvalue[], storedValue[] will now have length of 3
        storageArray.push(parseFloat(value.textContent))
        console.log(storageArray)
        // operates on storedValue[] of length 3 
        operate()
        // pushes operation that was requested to stored value, storedValue[] has length of 2
        storageArray.push('+')
        // empties number array for future number storage
        numberArray = []
        console.log(storageArray)
    }
    else {
        // if array length is not 0 or 2, so one, it knows to just add operator
        numberArray = []
        console.log('triggered else statement')
        storageArray.push('+')
        console.log(storageArray)
    }
return storageArray
}

function subtractionStorage() {
    // handles cases in beginning when no number is in calculator
    if (storageArray.length == 0){
        console.log('0 length is triggered')
        // pushes display value to storage value as not stored yet
        storageArray.push(parseFloat(value.textContent))
        // pushes operation
        storageArray.push('-')
        console.log(storageArray)
        // empties number array for new number 
        numberArray = []
    }
    // if storedvalue[] has a number and an operator in array
    else if (storageArray.length == 2) {
        console.log('triggered length 2 condition')
        console.log(storageArray)
        // adds display text to storedvalue[], storedValue[] will now have length of 3
        storageArray.push(parseFloat(value.textContent))
        console.log(storageArray)
        // operates on storedValue[] of length 3 
        operate()
        // pushes operation that was requested to stored value, storedValue[] has length of 2
        storageArray.push('-')
        // empties number array for future number storage
        numberArray = []
        console.log(storageArray)
    }
    else {
        // if array length is not 0 or 2, so one, it knows to just add operator
        numberArray = []
        console.log('triggered else statement')
        storageArray.push('-')
        console.log(storageArray)
    }
}

function multiplicationStorage() {
     // handles cases in beginning when no number is in calculator
     if (storageArray.length == 0){
        console.log('0 length is triggered')
        // pushes display value to storage value as not stored yet
        storageArray.push(parseFloat(value.textContent))
        // pushes operation
        storageArray.push('*')
        console.log(storageArray)
        // empties number array for new number 
        numberArray = []
    }
    // if storedvalue[] has a number and an operator in array
    else if (storageArray.length == 2) {
        console.log('triggered length 2 condition')
        console.log(storageArray)
        // adds display text to storedvalue[], storedValue[] will now have length of 3
        storageArray.push(parseFloat(value.textContent))
        console.log(storageArray)
        // operates on storedValue[] of length 3 
        operate()
        // pushes operation that was requested to stored value, storedValue[] has length of 2
        storageArray.push('*')
        // empties number array for future number storage
        numberArray = []
        console.log(storageArray)
    }
    else {
        // if array length is not 0 or 2, so one, it knows to just add operator
        numberArray = []
        console.log('triggered else statement')
        storageArray.push('*')
        console.log(storageArray)
    }
}

function divisionStorage() {
     // handles cases in beginning when no number is in calculator
     if (storageArray.length == 0){
        console.log('0 length is triggered')
        // pushes display value to storage value as not stored yet
        storageArray.push(parseFloat(value.textContent))
        // pushes operation
        storageArray.push('/')
        console.log(storageArray)
        // empties number array for new number 
        numberArray = []
    }
    // if storedvalue[] has a number and an operator in array
    else if (storageArray.length == 2) {
        console.log('triggered length 2 condition')
        console.log(storageArray)
        // adds display text to storedvalue[], storedValue[] will now have length of 3
        storageArray.push(parseFloat(value.textContent))
        console.log(storageArray)
        // operates on storedValue[] of length 3 
        operate()
        // pushes operation that was requested to stored value, storedValue[] has length of 2
        storageArray.push('/')
        // empties number array for future number storage
        numberArray = []
        console.log(storageArray)
    }
    else {
        // if array length is not 0 or 2, so one, it knows to just add operator
        numberArray = []
        console.log('triggered else statement')
        storageArray.push('/')
        console.log(storageArray)
    }
}

// clearing display and workspace 
function clearDisplay() {
    console.log('clear triggered')
    storageArray = [];
    numberArray = [];
    value.textContent = '0';
    console.log(storageArray);
    console.log(value.textContent)

}
// handling storage array to perform math operations 
function operate() {
    console.log('Triggering operation for storage array: ' + storageArray)
    let i = 0
    
    if (storageArray.length == 2){
        storageArray.push(parseFloat(value.textContent))
        console.log('triggered storage array less than 2 in operate function')
        console.log(storageArray)
    }


    while (i < storageArray.length) {
        console.log('while loop triggered ')
        if (storageArray[i] == '+') {
            let sum = addition(storageArray[i - 1], storageArray[i + 1])
            console.log(sum)
            storageArray.splice(i - 1, 3);
            storageArray.unshift(sum);
            console.log(storageArray);
            value.textContent = storageArray[0]
            i = 0

        }
        else if (storageArray[i] == '-') {
            let difference = subtraction(storageArray[i - 1], storageArray[i + 1])
            console.log(difference)
            storageArray.splice(i - 1, 3);
            storageArray.unshift(difference);
            console.log(storageArray);
            value.textContent = storageArray[0]
            i = 0

        }
        else if (storageArray[i] == '*') {
            let multiple = multiplication(storageArray[i - 1], storageArray[i + 1])
            console.log(multiple)
            storageArray.splice(i - 1, 3);
            storageArray.unshift(multiple);
            console.log(storageArray);
            value.textContent = storageArray[0]
            i = 0
        }
        else if (storageArray[i] == '/') {
            let divisor = division(storageArray[i - 1], storageArray[i + 1])
            console.log(divisor)
            storageArray.splice(i - 1, 3);
            storageArray.unshift(divisor);
            console.log(storageArray);
            value.textContent = storageArray[0]
            i = 0
        }
        else {
            i = i + 1
        }
    }
   
    console.log(storageArray)
    return storageArray

}

