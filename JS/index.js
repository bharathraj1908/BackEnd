for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}


for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }

    console.log(pattern);
}