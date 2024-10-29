let frase = "Esta é uma frase exemplo para teste";
let novaFrase = frase.split(" ").map(palavra => 
    palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
).join(" ");
console.log(novaFrase);
