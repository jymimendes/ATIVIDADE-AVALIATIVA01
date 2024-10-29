function maiorMenor(lista) {
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);
    return { maior, menor };
}
console.log(maiorMenor([10, 25, 38, 45, 99, 2, 77, 13, 56, 88]));
