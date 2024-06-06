alert("Boas-vindas ao jogo do número secreto!");
let numeroSecreto = 98;
console.log(numeroSecreto)
let chute = prompt("Escolha um número de 1 a 100");

//Se o chute for igual ao número secreto.
if (numeroSecreto == chute) {
    alert(`Você descobriu o número secreto é:${numeroSecreto}`);
}
else {
    alert("Você errou :(");
}