for (let i=0; i<9; i++) {
    console.log(i)
}

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


function calculaMedia(alunos) {
    let soma=0;
    for ( let i=0; i < alunos.length; i++) {  
        soma= soma + alunos[1].nota}
  
    const media= soma/ alunos.length
    return media 
}

const media1= calculaMedia (alunosTA)
const media2= calculaMedia (alunosTB)

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
    