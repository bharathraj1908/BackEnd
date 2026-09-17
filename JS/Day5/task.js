console.log("================================");
console.log("Day 5 TASK 1 - MAP: EMPLOYEE SALARY");
console.log("================================");

let employeeSalaries = [15000, 20000, 25000, 30000, 35000];

let increasedSalaries = employeeSalaries.map((salary) => {
    return salary + 2000;
});

console.log("Original Salaries:", employeeSalaries);
console.log("Updated Salaries:", increasedSalaries);


console.log("");
console.log("================================");
console.log("Day5 TASK 2 - FILTER: ELIGIBLE STUDENTS");
console.log("================================");

let studentMarks = [35, 78, 42, 90, 25, 67, 55];

let eligibleMarks = studentMarks.filter((mark) => {
    return mark >= 50;
});

console.log("Eligible Marks:", eligibleMarks);


console.log("");
console.log("================================");
console.log("Day 5 TASK 3 - FIND: ONE PRODUCT");
console.log("================================");

let productList = [
    { id: 101, name: "Laptop", price: 55000 },
    { id: 102, name: "Mouse", price: 800 },
    { id: 103, name: "Keyboard", price: 1500 },
    { id: 104, name: "Monitor", price: 12000 }
];

let selectedProduct = productList.find((item) => {
    return item.id === 103;
});

console.log("Complete Product:", selectedProduct);
console.log("Product Name:", selectedProduct.name);


console.log("");
console.log("================================");
console.log("   Day 5 TASK 4 - REDUCE: SHOPPING CART");
console.log("================================");

let shoppingItems = [
    { name: "Shirt", price: 1200 },
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 3000 },
    { name: "Bag", price: 1500 }
];

let shoppingTotal = shoppingItems.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log("Total Cart Price:", shoppingTotal);



