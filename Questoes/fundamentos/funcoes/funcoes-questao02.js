function contarVogaisConsoantes(frase) {
    let vogais = 0, consoantes = 0;
    for (let char of frase.toLowerCase()) {
        if ("aeiou".includes(char)) vogais++;
        else if (/[a-z]/.test(char)) consoantes++;
    }
    return { vogais, consoantes };
}
console.log(contarVogaisConsoantes("Exemplo de frase"));
