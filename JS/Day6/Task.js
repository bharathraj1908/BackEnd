console.log("================================");
console.log("DAY 6 TASK 1 - CALLBACK: CALCULATE");
console.log("================================");

const calculateTotal = (firstNumber, secondNumber, resultCallback) => {
    const totalResult = firstNumber + secondNumber;

    resultCallback(totalResult);
};

calculateTotal(10, 20, (finalResult) => {
    console.log("Addition Result:", finalResult);
});


console.log("");
console.log("================================");
console.log("Day 6 TASK 2 - PROMISE: CHECK NUMBER");
console.log("================================");

const checkNumber = (givenNumber) => {
    return new Promise((resolve, reject) => {

        if (givenNumber > 10) {
            resolve("Valid Number");
        } else {
            reject("Invalid Number");
        }

    });
};

checkNumber(20)
    .then((successMessage) => {
        console.log("Promise Result:", successMessage);
    })
    .catch((errorMessage) => {
        console.log("Promise Error:", errorMessage);
    });


console.log("");
console.log("================================");
console.log("Day6 TASK 3 - ASYNC / AWAIT");
console.log("================================");

const verifyNumber = async () => {

    try {

        const verificationResult = await checkNumber(20);

        console.log("Async/Await Result:", verificationResult);

    } catch (verificationError) {

        console.log("Async/Await Error:", verificationError);

    }

};

verifyNumber();