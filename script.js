'use strict';

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


let sum = 0;
let positiveCount = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] > 0) {
        positiveCount++;
    }
}
console.log("Сума елементів масиву: " + sum);
console.log("Кількість позитивних елементів: " + positiveCount);



function calculateMin(array) {
  return Math.min(...array);
}
let minElement = calculateMin(array);
console.log("Мінімальний елемент масиву: " + minElement);
let minIndex = array.indexOf(minElement);
console.log("Індекс мінімального елемента в масиві: " + minIndex);


function calculateMax(array) {
    return Math.max(...array);
}
let maxElement = calculateMax(array);
console.log("Максимальний елемент масиву: " + maxElement);
let maxIndex = array.indexOf(maxElement);
console.log("Індекс максимального елемента в масиві: " + maxIndex);


let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] < 0) {
        negativeCount++;
    }
}
console.log("Кількість негативних елементів: " + negativeCount);



function countOddPositiveNumbers(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            count++;
        }
    }
   return count;
}
let oddPositiveCount = countOddPositiveNumbers(array);
console.log("Кількість непарних позитивних елементів: " + oddPositiveCount);



function countEvenPositiveNumbers(array) {
    let countEven = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            countEven++;
        }
    }
   return countEven;
}
let evenPositiveCount = countEvenPositiveNumbers(array);
console.log("Кількість парних позитивних елементів: " + evenPositiveCount);



function sumOfEvenPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}
let sumOfEvenPositive = sumOfEvenPositiveNumbers(array);
console.log("Сума парних позитивних елементів: " + sumOfEvenPositive);



function sumOfOddPositiveNumbers(array) {
    let sumOdd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 !== 0) {
            sumOdd += array[i];
        }
    }
    return sumOdd;
}
let sumOfOddPositive = sumOfOddPositiveNumbers(array);
console.log("Сума непарних позитивних елементів: " + sumOfOddPositive);



function multOfPositiveNumbers(array) {
    let mult = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            mult *= array[i];
        }
    }
    return mult;
}
let multOfPositive = multOfPositiveNumbers(array);
console.log("Добуток позитивних елементів: " + multOfPositive);



function findZeroAndMaxElement(array) {
    let maxElement = Math.max(...array);
    let modifiedArray = array.map(element => (element === maxElement) ? element : 0);
    return modifiedArray;
}
let modifiedArray = findZeroAndMaxElement(array);
console.log("Масив після обнулення, окрім найбільшого елемента: " + modifiedArray);
