let frase = "Calcular a soma dos tamanhos";
let somaTamanhos = frase.split(" ").reduce((soma, palavra) => soma + palavra.length, 0);
console.log(`Soma dos tamanhos: ${somaTamanhos}`);
