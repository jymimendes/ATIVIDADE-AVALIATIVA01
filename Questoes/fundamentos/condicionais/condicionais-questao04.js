let alunos = [["Aluno1", [10, 50, 100]], ["Aluno2", [55, 78, 90]], ["Aluno3", [60, 50, 40]]];
alunos.forEach(aluno => {
    let nome = aluno[0];
    let notas = aluno[1];
    let media = notas.reduce((a, b) => a + b, 0) / notas.length;
    let status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media}, ${status}`);
});
