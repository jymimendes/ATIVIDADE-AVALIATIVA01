let numeros = [1, 2, 2, 3, 3, 3, 4];
let ocorrencias = {};
let maxOcorrencias = 0, numeroMaisFrequente;

for (let num of numeros) {
    ocorrencias[num] = (ocorrencias[num] || 0) + 1;
    if (ocorrencias[num] > maxOcorrencias) {
        maxOcorrencias = ocorrencias[num];
        numeroMaisFrequente = num;
    }
}
console.log(`Número com mais ocorrências: ${numeroMaisFrequente}`);
