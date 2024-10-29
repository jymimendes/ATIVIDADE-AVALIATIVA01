function maiorPalavra(frase) {
    let palavras = frase.split(" ");
    let maior = palavras.reduce((a, b) => a.length >= b.length ? a : b);
    return maior;
}
console.log(maiorPalavra("Encontre a maior palavra nesta frase"));
