// objeto estudante, criação:

const estudante = {
    nome: 'Gabriel',
    sobrenome: 'Santos Quaresma',
    matricula: 403865,
    notasSemestre: [8, 7, 10, 9]
};

console.log('objetos estudante', estudante);

//add a new propriet to object

estudante.modulo= 'HTML Semântico';

console.log('Objeto estudante com módulo', estudante);

console.log('nome do estudante:', estudante.nome);

console.log('Segunda nota do semestre:', estudante.notasSemestre[1]);

const copiaEstudante = {...estudante};

console.log('Cópia do obj "estudante":', copiaEstudante);

//alterando valores da cópia

copiaEstudante.nome = 'Atrodev';
console.log('Cópia com nome alterado', copiaEstudante);

//Add nota às notas do semestre

copiaEstudante.notasSemestre.push(9);
console.log('Cópia com add de nova nota', copiaEstudante);

//alterando o valor da propriedade modulo

copiaEstudante.modulo = 'Flexbox e Grid';
console.log('Módulo alterado', copiaEstudante);

//criação do array estudantes labenu

const estudantesLabenu = [];
estudantesLabenu.push(estudante);
estudantesLabenu.push(copiaEstudante);
console.log('Array de Estudante da Labenu', estudantesLabenu);

//Exercício P1

const carrinho = {
    cliente: 'Marlombrnado',
    fdepagamento: 'dinheiro',
    endereço: "Rua dos marlombrandos 826",
    compras: [{
        nome: 'batata',
        peso: 500,
        qtd: 20
    },
    { 
        nome: 'ovo',
        peso: 300,
        qtd: 30
    },
    { 
        nome: 'margarina',
        peso: 500,
        qtd: 1
    }
]
};

console.log(carrinho);
console.log('Quatidade de pds no carrinho:', carrinho.compras.length)

//P2

const copiaCarrinho = {...carrinho};

copiaCarrinho.cliente = 'Natalice<3';
copiaCarrinho.fdepagamento = 'Cartão Presente';
console.log(copiaCarrinho);