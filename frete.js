var compra = parseFloat(prompt("Digite o valor da compra:"));
var compra2 = 50.00
var frete = compra + compra2

if(compra >= 300){
    console.log("O frete é gratis:");
}else if(compra < 300){
    console.log("a compra ficou: " + frete);
}