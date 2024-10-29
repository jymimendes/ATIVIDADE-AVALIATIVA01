let hoje = new Date();
let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let diaSemana = diasSemana[hoje.getDay()];
let horaAtual = hoje.toLocaleTimeString();
console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);
