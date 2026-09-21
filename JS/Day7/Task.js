console.log("================================");
console.log("Day7 TASK 1 - ELECTRICITY BILL");
console.log("================================");

let customerName = "Bharath";
let unitsConsumed = 250;
let electricityBill = 0;

if (unitsConsumed <= 100) {
    electricityBill = unitsConsumed * 2;
} else if (unitsConsumed <= 200) {
    electricityBill = (100 * 2) + ((unitsConsumed - 100) * 3);
} else {
    electricityBill = (100 * 2) + (100 * 3) + ((unitsConsumed - 200) * 5);
}

console.log("Customer Name:", customerName);
console.log("Units Consumed:", unitsConsumed);
console.log("Electricity Bill: ₹" + electricityBill);


console.log("");
console.log("================================");
console.log("Day7 TASK 2 - ATM CASH WITHDRAWAL");
console.log("================================");

let accountBalance = 15000;
let withdrawAmount = 4000;

if (withdrawAmount <= 0) {
    console.log("Error: Withdrawal amount must be greater than 0");
} else if (withdrawAmount % 500 !== 0) {
    console.log("Error: Amount must be a multiple of 500");
} else if (withdrawAmount > accountBalance) {
    console.log("Error: Insufficient balance");
} else {
    accountBalance = accountBalance - withdrawAmount;

    console.log("Withdrawal Successful");
    console.log("Withdrawn Amount:", withdrawAmount);
    console.log("Remaining Balance:", accountBalance);
}


console.log("");
console.log("================================");
console.log("Day7 TASK 3 - EMPLOYEE LOGIN");
console.log("================================");

let correctPin = 1234;
let enteredPin = 1234;
let loginAttempts = 0;

for (let attemptNumber = 1; attemptNumber <= 3; attemptNumber++) {

    loginAttempts++;

    if (enteredPin === correctPin) {
        console.log("Login Successful");
        break;
    } else {
        console.log("Incorrect PIN");
    }

    if (loginAttempts === 3) {
        console.log("Account Blocked");
    }
}


console.log("");
console.log("================================");
console.log("Day7 TASK 4 - MULTIPLICATION BILL");
console.log("================================");

let productCost = 250;

for (let productQuantity = 1; productQuantity <= 5; productQuantity++) {

    let totalPrice = productQuantity * productCost;

    console.log(
        "Quantity " + productQuantity + " = ₹" + totalPrice
    );
}


console.log("");
console.log("================================");
console.log("Day7 TASK 5 - SEAT BOOKING");
console.log("================================");

let theatreRows = 3;
let seatsPerRow = 5;

for (let rowNumber = 1; rowNumber <= theatreRows; rowNumber++) {

    for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {

        console.log(
            "Row " + rowNumber + " - Seat " + seatNumber
        );

    }
}


console.log("");
console.log("================================");
console.log("Day7 TASK 6 - DELIVERY CHARGE");
console.log("================================");

const calculateDelivery = (orderAmount) => {

    let deliveryCharge;

    if (orderAmount >= 1000) {
        deliveryCharge = 0;
    } else if (orderAmount >= 500) {
        deliveryCharge = 50;
    } else {
        deliveryCharge = 100;
    }

    return orderAmount + deliveryCharge;
};

let finalAmount = calculateDelivery(750);

console.log("Order Amount: ₹750");
console.log("Final Payable Amount: ₹" + finalAmount);


console.log("");
console.log("================================");
console.log("Day7 TASK 7 - HIGHEST SALES");
console.log("================================");

let salesAmounts = [12000, 18000, 9500, 25000, 16000];

let highestSales = salesAmounts[0];

for (let salesIndex = 1; salesIndex < salesAmounts.length; salesIndex++) {

    if (salesAmounts[salesIndex] > highestSales) {
        highestSales = salesAmounts[salesIndex];
    }

}

console.log("Highest Sales:", highestSales);


console.log("");
console.log("================================");
console.log("Day7 TASK 8 - PALINDROME ARRAY");
console.log("================================");

let palindromeNumbers = [1, 2, 3, 2, 1];

let isPalindrome = true;

for (
    let palindromeIndex = 0;
    palindromeIndex < palindromeNumbers.length / 2;
    palindromeIndex++
) {

    let leftValue = palindromeNumbers[palindromeIndex];

    let rightValue =
        palindromeNumbers[palindromeNumbers.length - 1 - palindromeIndex];

    if (leftValue !== rightValue) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


console.log("");
console.log("================================");
console.log("Day 7 TASK 9 - STUDENT RESULT");
console.log("================================");

let studentMarksList = [45, 78, 32, 90, 67];

let graceMarksResult = studentMarksList.map((originalMark) => {
    return originalMark + 5;
});

let passedMarksList = graceMarksResult.filter((updatedMark) => {
    return updatedMark >= 50;
});

console.log("Marks After Grace:", graceMarksResult);
console.log("Marks 50 or Above:", passedMarksList);


console.log("");
console.log("================================");
console.log("Day7 TASK 10 - EMPLOYEE SEARCH");
console.log("================================");

let employeeDetails = [
    { id: 101, name: "Arun", salary: 25000 },
    { id: 102, name: "Priya", salary: 35000 },
    { id: 103, name: "Kumar", salary: 30000 }
];

let searchedEmployee = employeeDetails.find((employeeData) => {
    return employeeData.id === 102;
});

console.log("Employee Name:", searchedEmployee.name);
console.log("Employee Salary:", searchedEmployee.salary);