
const alunosTA= [
    { nome: 'dayene', nota: 10 },
    { nome: 'julia', nota: 9 },
    { nome: 'junior', nota: 7 }
];

const alunosTB= [
    { nome: 'dayene', nota: 8},
    { nome: 'julia', nota: 7 },
    { nome: 'junior', nota: 5 }
];

const alunosTC= [
    { nome: 'dayene', nota: 3},
    { nome: 'julia', nota: 2},
    { nome: 'junior', nota: 2 }
];

function calculaMedia(alunos) {
    return console.log ((alunos[0].nota, alunos[1].nota, alunos[2].nota)/3);
}

const media1= calculaMedia (alunosTA)
const media2= calculaMedia (alunosTB)
const media3= calculaMedia (alunosTC)

function enviaMensagem(media,turma) {
    // se a media for maior que 5, parabenizar a turma.
    if (media > 5) {
        console.log (`a media da turma ${turma} foi de ${media}. parabéns`)
    } else {
       console.log(`a media da turma ${turma} é menor que 5`)
    }

}

    enviaMensagem (media1,'turmaA')
    enviaMensagem (media2, 'turmaB')
    enviaMensagem (media3,'turmaC')