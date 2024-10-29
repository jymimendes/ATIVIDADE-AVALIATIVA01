let numeros = [2, 3, 4];
let somaCubos = numeros.reduce((soma, num) => soma + Math.pow(num, 3), 0);
console.log(`Soma dos cubos: ${somaCubos}`);
