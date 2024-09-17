var idade = parseInt(prompt("Digite sua idade:"));

if (idade < 12){
    console.log("A classificação do filme é livre:");
}else if(idade < 14){
    console.log("A classificação do filme é 12 anos:");
}else if(idade < 16){
    console.log("A classificação do filme é 14 anos:");
}else if(idade < 18){
    console.log("A classificação do filme é 16 anos:");
}else{
    console.log("A classificação é 18 anos:");
}