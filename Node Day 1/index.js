// Question 1
function ageInDays(ageInYears) {
    return ageInYears * 365
}

console.log(ageInDays(35));

// Question 2
function findSmallestNumber(numbers) {
    if (numbers.length == 0) {
        return undefined;
    }

    let smallestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}

const numbersArray = [5, 2, 9, 1, 5, 6];
const smallestNumber = findSmallestNumber(numbersArray);
console.log("The smallest number is:", smallestNumber);

// Question 3
function sortDigitsDescending(number) {
    if (number < 0) {
        return undefined;
    }
    const numberArray = [];
    while (number > 0) {
        const numberDigit = number % 10;
        numberArray.push(numberDigit);
        number = Math.floor(number / 10);
    }
    if (numberArray.length <= 1) {
        return numberArray[0];
    }

    const n = numberArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (numberArray[i] < numberArray[i + 1]) {
                const temp = numberArray[i];
                numberArray[i] = numberArray[i + 1];
                numberArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    let result = 0;
    for (let i = 0; i < numberArray.length; i++) {
        result = result * 10 + numberArray[i];
    }

    return result;
}

const inputNumber = 587621697;
const descendingNumber = sortDigitsDescending(inputNumber);
console.log("Descending number:", descendingNumber);

// Question 4

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;

    return average;
}

// Example usage:
const numbersAverageArray = [5, 2, 9, 1, 5, 6];
const averageValue = calculateAverage(numbersArray);
console.log("The average of these numbers is:", averageValue);

// Question 5

// Both will be false
// when comparing two Non-primitive values  it checks for reference equality (i.e., whether they refer to the same memory location) rather than structural equality (i.e., whether their contents are the same).

// Question 6

// A
// C
// B

//When the main function is called, it immediately executes the first line then in the setTimeOut it scedules this line and then exexutes the line after it then comes back to it.

// Question 7

// The output will be 10 as var can be redelcared

// Question 8
// undefined
// ReferenceError: age is not defined
// in the var the declarition of the variable is hoisted as var name so it is not defined yet for the engine
// in the let it is hoisted too but remain in the temporal dead zone (TDZ) until it is declared.