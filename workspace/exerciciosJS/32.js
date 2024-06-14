let alunos = [
    { nome: "João", idade: 18, notas: [7, 8, 9] },
    { nome: "Maria", idade: 20, notas: [8, 8, 10] },
    { nome: "Ana", idade: 17, notas: [6, 7, 8] }
];

let nomes = alunos.map(aluno => aluno.nome);

console.log(`Nome do aluno: ${nomes} `);
