// JAVASCRIPT - O que é?

//VARIAVEIS
let nome = "Renata Araujo"
//console.log(nome)

nome = "Maria"

// não é possivel alterar o valor um vez definida
const cidade = "Curitiba"

// TIPOS DE DADOS
//TIPO STRING - TUDO QUE É TEXTO 
let texto = "Olá mundo"
// console.log(texto)
//TIPO INTEIRO/NUMBER
let numero = 1
// TIPO BOLEANO 
let verdadeiro = true 
let falso = false

// OPERADORES BÁSICOS 

//SOMA + 
//SUBTRAÇÃO - 
//DIVISÃO / 
//MULTIPLICAÇÃO * 
//MAIS IGUAL +=
//MENOS IGUAL -= 

// += seria equivalente à variavel = variavel + 1
//numero1+=1

// let idade = 18 
// idade+=1
// 18 = 18 + 1
// idade = idade + 1

// ESTRUTURAS CONDICIONAIS 
//SE(condicional){
   // ENTÃO FAÇA TAL COISA
//} SENÃO {

// }
// 1 = é atribuição
// 2 == é comparação

//== ou === 
// === compara valor e tipo
// == compara valor 

// >= maior igual
// <= menor igual

// Diferente 
// != 
// 2 != 2 FALSE

// OPERADORES LÓGICOS
let idade = 15
let instrutora = "Maria"
if(idade >= 18 || instrutora == "Maria") {
    // console.log("Uhul, maior de idade")
}else {
    // console.log("Ainda não atingiu a maior idade")
}

// OUTROS TIPOS DE DADOS
//TIPO ARRAY 
//criar uma lista ou array
let listaDeDevs = ["Polyana", "Maria","Curitiba", "Amanda", "Guarapuava", "Mariana", 32131, true, "Luana"]
//adicionar elementos no array
listaDeDevs.push("Angelica")
//acessar posições especificas do meu array 
listaDeDevs[2]

// TIPO OBJETO
// objeto sempre terá chave e valor
let pessoaMaria = {
    nome: "Maria",
    idade: 26,
    cidade: "Curitiba"
}
let pessoaAmanda = {
    nome: "Amanda",
    idade: 26,
    cidade: "Guarapuava"
}
pessoaMaria.cidade

listaDeDevs.push(pessoaMaria)
listaDeDevs.push(pessoaAmanda)
// console.log(listaDeDevs[10].nome)


/* FUNÇÕES */

/*

DECLARAÇÃO DE FUNÇÃO
function minhaFuncao() {
    passo a passo a ser executado na função    
}

CHAMADA/EXECUÇÃO DE FUNÇÃO
minhaFuncao()

*/

function imprimirMeuNome() {
    // console.log("Maria Porcina");
}

// imprimirMeuNome();

// const soma1 = 25;
// const soma2 = 10;

function somar(soma1, soma2) {
    return soma1 + soma2;
}

const resultadoSoma = somar(30, 5000);

// console.log(resultadoSoma);

/* ESTRUTURA DE REPETIÇÃO */

/* 

enquanto

for( variável de controle; condição de parada; iterador) {

}

*/

// for(let contador = 0; contador < 2; contador += 1){
//     imprimirMeuNome();
// }

const listaNomes = ['Maria', 'Amanda', 'Thalita', 'Polyana', 'nome2'];

// console.log(listaNomes[0])
// console.log(listaNomes[1])
// console.log(listaNomes[2])
// console.log(listaNomes[3])
// console.log(listaNomes[4])
// console.log(listaNomes[5])
// console.log(listaNomes[6])

for(let contador = 0; contador < listaNomes.length; contador += 1){
    // console.log(listaNomes[contador]);
}