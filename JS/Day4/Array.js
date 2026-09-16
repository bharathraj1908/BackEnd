console.log("================================");
console.log("Day4 TASK 1 - STUDENT NAMES");
console.log("================================");

let students = ["Arun", "Bala", "Kumar", "Rahul", "Vijay"];

console.log(students[0]);
console.log(students[2]);
console.log(students[4]);


console.log("");
console.log("================================");
console.log("day 4 TASK 2 - PRODUCT PRICES");
console.log("================================");

let prices = [1500, 2500, 3500, 4500, 5500];

let first = prices[0];
let last = prices[4];

let total = first + last;

console.log(total);


console.log("");
console.log("================================");
console.log("Day4 TASK 3 - TECHNOLOGIES");
console.log("================================");

let arr = ["HTML", "CSS", "JavaScript", "React", "Node"];

console.log(arr[2]);
console.log(arr[3]);
console.log(arr[arr.length - 1]);


console.log("");
console.log("================================");
console.log("Day4 TASK 4 - STUDENT DATA");
console.log("================================");

let data = [
    ["Arun", 80],
    ["Bala", 75],
    ["Kumar", 90]
];

console.log(data[0][0]);
console.log(data[0][1]);
console.log(data[1][0]);
console.log(data[2][1]);

console.log("================================");
console.log("Day 4 TASK 5 - LOGICAL ARRAY ACCESS");
console.log("================================");

let numbers = [10, 20, 30, 40, 50];

let secondValue = numbers[1];

let secondLastValue = numbers[numbers.length - 2];

let answer = secondValue + secondLastValue;

console.log(answer);