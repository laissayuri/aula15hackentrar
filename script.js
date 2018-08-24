// let nome = prompt("Qual o seu nome?");

// document.querySelector("#usuario").innerHTML = nome;


let nome = document.querySelector("input"); // pega o valor digitado no input

function entrar(){
    
    if(nome.value.trim()) { // se a pessoa digitou algo, o nome é true, entao executa o negocio
                    // trim faz com que o começo e o final sejam removidos se forem espaço
                    // se tudo for espaço, nao entra.
        document.querySelector("#usuario").innerHTML = nome.value;
        document.querySelector("#entrada").style.display = "none"; // input desaparece
        document.querySelector("header").style.display = "flex"; //header reaparece
    }
    
}

document.querySelector("button").onclick = entrar;

nome.onkeyup = function(evento){
    //responsável por essa funçao é o body // evento é o parametro
    if(evento.key === "Enter"){
        entrar();
    }
}