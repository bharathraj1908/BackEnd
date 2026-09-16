console.log("========== Day3 TASK 1: PRIVATE SALARY ==========");

const createEmployee = () => {
    let salary = 20000;

    return (amount) => {
        salary = salary + amount;
        return salary;
    };
};

const updateSalary = createEmployee();

console.log(updateSalary(5000));
console.log(updateSalary(3000));


console.log("========== Day 3 TASK 2: PRODUCT STOCK ==========");

const createStock = () => {
    let stock = 10;

    return {
        addStock: (quantity) => {
            stock = stock + quantity;
            return stock;
        },

        sellProduct: (quantity) => {
            if (quantity > stock) {
                return "Not enough stock";
            }

            stock = stock - quantity;
            return stock;
        }
    };
};

const product = createStock();

console.log(product.addStock(5));
console.log(product.sellProduct(3));
console.log(product.sellProduct(2));