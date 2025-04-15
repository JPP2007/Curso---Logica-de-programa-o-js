alert('Boas-vindas ao jogo do número secreto')
let numeroSecreto = 7;
console.log(numeroSecreto)
let chute = prompt('Escolha um número de 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
   alert('Acertou!')
} else{
    alert('Você errou: ')
}
