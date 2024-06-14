let alunos = [
    { nome: "João", idade: 18, notas: [7, 8, 9] },
    { nome: "Maria", idade: 20, notas: [8, 8, 10] },
    { nome: "Ana", idade: 17, notas: [6, 7, 8] }
];

let mediaIdades = alunos.reduce((total, aluno) => total + aluno.idade, 0) / alunos.length;

console.log(`Média das idades dos alunos: ${mediaIdades}`);