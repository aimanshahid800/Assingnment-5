"use strict";
//Question-1
console.log("Question-1");
console.log("Hello World! :).");
//Question-2
console.log("Question-2");
let temprature = 30;
if (temprature < 20) {
    console.log("It's Cold.");
}
else {
    console.log("It's Hot.");
}
//Question-3
console.log("Question-3");
console.log("Result after sub 3 from 10 is : ", 10 - 3);
//Question-4
console.log("Question-4");
let firstName = "Aiman";
let lastName = "Shahid.";
let fullName = `${firstName}${lastName}`;
console.log(fullName);
//Question-5
console.log("Question-5");
let num = 5;
if (num > 5) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Question-6
console.log("Question-6");
function claculateArea(r) {
    const PI = 3.14;
    let area = PI * r ** 2;
    return area;
}
console.log("Area of circle is : ", claculateArea(5));
//Question-7
console.log("Question-7");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//Qyestion-8
console.log("Question-8");
let temprature2 = [20, 30, 49, 79, 21];
let max = Math.max(...temprature2);
console.log(max);
//Question-9
console.log("Question-9");
let age = 18;
if (age < 18) {
    console.log("You are Minor.");
}
else {
    console.log("You are Adult");
}
//Question-10
console.log("Question-10");
function arrayOfNnumbers(arr) {
    let positivenumber = [];
    for (let num of arr) {
        if (num >= 0) {
            positivenumber.push(num);
        }
        return positivenumber;
    }
}
console.log("the positive numbers are in array is:", arrayOfNnumbers([2, -3, 4, -5, 6]));
//Question-11
console.log("Question-11");
function wordStartWithA(word) {
    let result = word.filter((word) => word.startsWith("a") || word.startsWith("A"));
    return result;
}
console.log(wordStartWithA(["a", "b", "ah", "ad"]));
//Question-12
console.log("Question-12");
let fruit = ["apple", "banana", "mango", "orange", "strawberry"];
let secondToLastFruit = fruit[fruit.length - 2];
console.log(secondToLastFruit);
//Question-13
console.log("Question-13");
function squreOfArray(num) {
    let squre = num.map((num) => num * num);
    return squre;
}
console.log(squreOfArray([1, 2, 5, 6, 8, 6]));
//Question-14
console.log("Question-14");
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));
//Question-15
console.log("Question-15");
function countScoreChanges(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        }
        else if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        }
    }
    console.log(`The score exceeded the maximum score ${maxCount} times.`);
    console.log(`The score fell below the minimum score ${minCount} times.`);
}
countScoreChanges([10, 5, 20, 20, 4, 5, 2, 25, 1]);
//Question-16
console.log("Question-16");
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsyValues(["", [], 0, null, undefined, "test"]));
//Question-17
console.log("Question-17");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result);
//Question-18
console.log("Question-18");
function sumOfElements(arr, parity) {
    return arr.reduce((sum, num) => {
        if (parity === "even" && num % 2 === 0) {
            return sum + num;
        }
        else if (parity === "odd" && num % 2 !== 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(sumOfElements(arr, "even"));
console.log(sumOfElements(arr, "odd"));
//Question-19
console.log("Question-19");
function findElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(findElement(arr, 3));
console.log(findElement(arr, 7));
//Question-20
console.log("Question-20");
function findSmallest(arr) {
    return Math.min(...arr);
}
let arr5 = [5, 2, 9, 1, 5, 6];
console.log(findSmallest(arr));
//Question-21
console.log("Question-21");
function calculateProduct(arr) {
    return arr.reduce((product, num) => product * num, 1);
}
console.log("Product of all elements of array is", calculateProduct([1, 4, 6, 8, 4]));
//Question-22
console.log("Question-22");
function filterByLength(arr, n) {
    return arr.filter((str) => str.length > n);
}
let arr6 = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("length is:", filterByLength(arr6, 5));
//Question-23
console.log("Question-23");
function findDuplicates(arr) {
    let duplicates = arr.filter((item, index) => arr.indexOf(item) != index);
    return [...new Set(duplicates)];
}
console.log(findDuplicates([1, 2, 4, 6, 7]));
//Question-24
console.log("Question-24");
function incrementAll(arr) {
    return arr.map((num) => num + 1);
}
console.log(incrementAll([1, 3, 5, 6, 7]));
//Question-25
console.log("Question-25");
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
let arr7 = [1, 1, 1, 3, 4, 5];
let element = 1;
console.log(countOccurrences(arr7, element));
//Question-26
console.log("Question-26");
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 4, 6, 5, 8, 9]));
//Question-27
console.log("Question-27");
function formatNames(names) {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else {
        let lastTwoNames = names.splice(-2);
        return `${names.join(", ")}, ${lastTwoNames.join(" and ")}`;
    }
}
console.log(formatNames(["ali", "wali", "zaib", "amna"]));
//Question-28
console.log("Question-28");
function convertToCelsius(fahrenheitTemps) {
    const celsiusTemps = fahrenheitTemps.map((temp) => ((temp - 32) * 5) / 9);
    console.log(celsiusTemps);
}
console.log(convertToCelsius([23, 56, 54, 32]));
//Question-29
console.log("Question-29");
function minMaxAverage(nums) {
    let min = nums[0];
    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min)
            min = nums[i];
        if (nums[i] > max)
            max = nums[i];
        sum += nums[i];
    }
    let avg = sum / nums.length;
    return { min, max, avg };
}
console.log(minMaxAverage([1, 4, 7, 3, 6]));
//Question-30
console.log("Question-30");
function swapElements(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let arr8 = [1, 2, 3, 4, 5];
swapElements(arr8, 1, 3);
console.log(arr8);
//Question-31
console.log("Question-31");
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar("Aiman", "a"));
//Question-32
console.log("Question-32");
let todoList = [
    { task: "Do laundry", completed: false },
    { task: "Buy groceries", completed: true },
];
function getIncompleteTasks(todoList) {
    let incompleteTasks = [];
    for (let item of todoList) {
        if (!item.completed) {
            incompleteTasks.push(item.task);
        }
    }
    return incompleteTasks;
}
let incompleteTasks = getIncompleteTasks(todoList);
console.log(incompleteTasks);
//Question-33
console.log("Question-33");
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([2, 45, 56, 78]));
//Question-34
console.log("Question-34");
function logReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
logReverse([1, 2, 3, 4, 5]);
//Question-35
console.log("Question-35");
function calculate(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            if (operand2 !== 0) {
                return operand1 / operand2;
            }
            else {
                console.log("Error: Division by zero is not allowed.");
                return NaN;
            }
        default:
            console.log("Error: Invalid operator.");
            return NaN;
    }
}
console.log(calculate(2, 3, "+"));
