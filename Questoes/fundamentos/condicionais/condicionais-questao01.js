let num1 = 25, num2 = 30;
if (num1 % 2 !== 0) {
    console.log(`${num1} é considerado maior`);
} else if (num2 % 2 !== 0) {
    console.log(`${num2} é considerado maior`);
} else {
    console.log(num1 > num2 ? `${num1} é maior` : `${num2} é maior`);
}
