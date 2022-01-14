// DOM 
// Document Object Model (Modelo de objeto de Documentos)

// Métodos Seletores 
//get Element By Id
const main = document.getElementById("conteudoPrincipal")
//console.log(main)

//QuerySelector 
const exemploDiv1 = document.querySelector("#conteudoPrincipal article")
//console.log(exemploDiv1)

//QuerySelectorAll
const listaUls = document.querySelectorAll("ul")
//console.log(listaUls)

//createElement
const elementoCriado = document.createElement("a")
//console.log(elementoCriado)

// appendChild - inserir um elemento html na nossa pagina pelo js
//elemento de referência e o que eu quero inserir 
main.appendChild(elementoCriado)
//console.log(main)


/* ======== */

/* EVENTOS */

// addEventListener => adicionar escutador de evento

// elemento.addEventListener('evento', ação a ser executada);

const div1Exemplo = document.querySelector('.div1');

console.log(div1Exemplo);

div1Exemplo.addEventListener('click', imprimirHelloWorld);

function imprimirHelloWorld(evento){
    console.log(evento.target);
}