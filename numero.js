let numero = Math.floor(Math.random()*500);
let numTentativas = 0;
let palpite = null;
let formPalpite = document.getElementById("palpite");
let divBody = document.querySelector("body");
let divResultados = document.getElementById("resultados");
function verificarTentativa(){
	palpite = formPalpite.value;
	esvaziarDiv(divResultados);
	if(numTentativas >= 10){
		esvaziarDiv(divBody);
		mensagem = document.createElement("h1");
		mensagem.innerHTML = "Você não adivinhou :/";
		botao = document.createElement("button");
		botao.innerHTML = "tentar de novo";
		divBody.appendChild(mensagem);
		divBody.appendChild(botao);
		botao.addEventListener("click", ()=>location.reload());
	}else if(isNaN(parseInt(palpite))){
		criarFrase(divResultados, "O palpite deve ser um número inteiro");
	}else if(parseInt(palpite) < numero){
		criarFrase(divResultados, "O número é maior que isso");
	}else if(parseInt(palpite) > numero){
		criarFrase(divResultados, "O número é menor que isso");
	}else{
		esvaziarDiv(divBody);
		mensagem = document.createElement("h1");
		mensagem.innerHTML = "Você adivinhou :D";
		botao = document.createElement("button");
		botao.innerHTML = "tentar de novo";
		divBody.appendChild(mensagem);
		divBody.appendChild(botao);
		botao.addEventListener("click", ()=>location.reload());
	}
	if(parseInt(palpite)!=numero){
		numTentativas+=1;
	}
}
function esvaziarDiv(div){
	while(div.firstChild){
		div.removeChild(div.firstChild);
	}
}
function criarFrase(div, frase){
	let divFrase = document.createElement("p");
	divFrase.innerHTML = frase;
	div.appendChild(divFrase);
}
function isNumber(value) {
  return typeof value === 'number';
}
