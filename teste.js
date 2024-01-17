
const alunosTA= [
    { nome: 'dayene', nota: 10 },
    { nome: 'julia', nota: 9 },
    { nome: 'junior', nota: 7 }
];

const alunos= [
    { nome: 'dayene', nota: 10 },
    { nome: 'julia', nota: 9 },
    { nome: 'junior', nota: 7 }
];

function calculaMedia(aluno1,aluno2,aluno3) {
    return console.log ((aluno1 + aluno2 + aluno3)/3 )
}

calculaMedia (alunos[0].nota, alunos[1].nota, alunos[2].nota);
