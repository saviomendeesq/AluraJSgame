alert("Boas-vindas ao jogo do número secreto!");
let numeroSecreto = 98;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 100");
{    //Se o chute for igual ao número secreto.
    if (chute == numeroSecreto) {
       break
    } else {
    if (chute > numeroSecreto){
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
        }
    }   
    tentativas++;
}}
if (tentativas >1){
    alert(`Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Você descobriu o número secreto é ${numeroSecreto} com ${tentativas} tentativa`);
}