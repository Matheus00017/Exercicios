var cardapio = "===== Escolha um lanche =====\n";
cardapio = cardapio + "codigo | nome | Preço\n";
cardapio += "100 Cachorro quente 1,10\n";
cardapio += "101 Bauru simples 1,30\n";
cardapio += "102 Bauru c/ovo 1,50\n"; 
cardapio += "103 Hamburger 1,10\n";
cardapio += "104 Cheeseburger 1,30\n";
cardapio += "\nDigite o código do lanche escolhido";

var codigo = parseInt(prompt(cardapio));
var quantidade = parseInt(prompt("Digite a quantidade de lanches que deseja pedir:"));
var valorTotal = 0;


if(codigo == 100){
    valorTotal = quantidade * 1.10;
}else if(codigo == 101){
    valorTotal = quantidade *1.30;
}else if(codigo == 102){
    valorTotal = quantidade *1.50;
}else if(codigo == 103){
    valorTotal = quantidade *1.10;
}else if(codigo == 104){
    valorTotal = quantidade *1.30;
}else{
    console.log("Digite um número valido:");
}

console.log("O seu lanche de " + codigo + " esta pronto ");
console.log("Foram pedidos" + quantidade + "lanche")
console.log("Total a pagar: R$" + valorTotal)