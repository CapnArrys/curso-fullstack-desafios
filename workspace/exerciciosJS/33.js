let alunos = [
    { nome: "João", idade: 18, notas: [7, 8, 9] },
    { nome: "Maria", idade: 20, notas: [8, 8, 10] },
    { nome: "Ana", idade: 17, notas: [6, 7, 8] }
];

let alunosMaiorIdade = alunos.filter(aluno => aluno.idade >= 18);

console.log("Alunos com idade maior ou igual a 18: ", alunosMaiorIdade);
