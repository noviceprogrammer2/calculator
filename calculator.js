

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
    return (input1 / input2)
}



let value = document.getElementById('displayValue')
console.log(value)


let numberArray = new Array
console.log(numberArray)

let storageArray = new Array

function input(num) {
    numberArray.push(num.value)
    console.log(numberArray.join(''))
    value.textContent = numberArray.join('')

}

function storeValue(){
    storageArray.push(parseInt(value.textContent))
    console.log(storageArray);
    value.textContent = "0"
    console.log(value.textContent)
    console.log(storageArray)
    numberArray = []
}

function additionStorage(){
    storageArray.push('+')
    console.log(storageArray)
}

function subtractionStorage(){
    storageArray.push('-')
    console.log(storageArray)
}

function multiplicationStorage(){
    storageArray.push('*')
    console.log(storageArray)
}

function divisionStorage(){
    storageArray.push('/')
    console.log(storageArray)
}

function clearDisplay(){
    console.log('clear triggered')
    storageArray = [];
    numberArray = [];
    value.textContent = '0';
    console.log(storageArray);
    console.log(value.textContent)
    
}

function operate(){
    storageArray.push(parseInt(value.textContent))
    console.log('Triggering operation for storage array: ' + storageArray)
    let i = 0
    while (i<storageArray.length){
        console.log('for loop triggered ')
        if (storageArray[i] == '+'){
            let sum = addition(storageArray[i-1], storageArray[i+1])
            console.log(sum)
            storageArray.splice(i-1,3);
            storageArray.unshift(sum);
            console.log(storageArray); 
            value.textContent = sum
            i = 0
            
        }
        else if (storageArray[i] == '-'){
            let difference = subtraction(storageArray[i-1], storageArray[i+1])
            console.log(difference)
            storageArray.splice(i-1,3);
            storageArray.unshift(difference);
            console.log(storageArray); 
            value.textContent = difference
            i = 0

        }
        else if (storageArray[i] == '*'){
            let multiple = multiplication(storageArray[i-1], storageArray[i+1])
            console.log(multiple)
            storageArray.splice(i-1,3);
            storageArray.unshift(multiple);
            console.log(storageArray); 
            i = 0
        }
        else if(storageArray[i] == '/'){
            let divisor = division(storageArray[i-1], storageArray[i+1])
            console.log(divisor)
            storageArray.splice(i-1,3);
            storageArray.unshift(divisor);
            console.log(storageArray); 
            i = 0
        }
        else {
            i = i + 1 
        }
    }
    return storageArray
    
}

function test(){
    console.log('test triggered')
}
