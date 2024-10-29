let nomeCompleto = "Alan Mathison Turing";
let nomeArray = nomeCompleto.split(" ");
let resultado = nomeArray.slice(1).map(n => `${n[0]}.`).join(" ") + ` ${nomeArray[0]}`;
console.log(resultado);
