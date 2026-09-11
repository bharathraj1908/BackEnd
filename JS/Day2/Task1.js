const createBankAccount = () => {
    let bankBalance = 5000;

    const checkBankBalance = () => {
        console.log("Account Balance:", bankBalance);
    };

    return checkBankBalance;
};

let outsideBankBalance = 100000;

const bankAccount = createBankAccount();

console.log("Outside Balance:", outsideBankBalance);
bankAccount();



const createDepositAccount = () => {
    let depositBalance = 1000;

    const makeDeposit = (amount) => {
        depositBalance += amount;
    };

    const showDepositBalance = () => {
        console.log(depositBalance);
    };

    return {
        makeDeposit,
        showDepositBalance
    };
};

const depositAccount = createDepositAccount();

depositAccount.makeDeposit(500);
depositAccount.makeDeposit(200);

depositAccount.showDepositBalance();



const createPrivateCounter = () => {
    let counterValue = 0;

    const increaseCounter = () => {
        counterValue++;
    };

    const decreaseCounter = () => {
        counterValue--;
    };

    const displayCounter = () => {
        console.log(counterValue);
    };

    return {
        increaseCounter,
        decreaseCounter,
        displayCounter
    };
};

const privateCounter = createPrivateCounter();

privateCounter.increaseCounter();
privateCounter.increaseCounter();
privateCounter.increaseCounter();
privateCounter.decreaseCounter();

privateCounter.displayCounter();

let outsideCounter = 100;

console.log("Outside Count:", outsideCounter);
privateCounter.displayCounter();



const createEmployeeAccount = (employeeName, startingSalary) => {
    let employeeSalary = startingSalary;

    const getEmployeeName = () => {
        return employeeName;
    };

    const getEmployeeSalary = () => {
        return employeeSalary;
    };

    const addSalary = (amount) => {
        if (amount >= 0) {
            employeeSalary += amount;
        }
    };

    return {
        getEmployeeName,
        getEmployeeSalary,
        addSalary
    };
};

const employeeAccount = createEmployeeAccount("Arun", 25000);

employeeAccount.addSalary(5000);

console.log(employeeAccount.getEmployeeName());
console.log(employeeAccount.getEmployeeSalary());

let outsideSalary = 100000;

console.log("Outside Salary:", outsideSalary);
console.log("Employee Salary:", employeeAccount.getEmployeeSalary());