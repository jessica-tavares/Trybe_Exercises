let notaPorcentagem = 120;
let notaLetra = undefined;

if (notaPorcentagem >= 90){
    notaLetra = "A";
}
else if (notaPorcentagem >= 80){
    notaLetra = "B";
}
else if (notaPorcentagem >= 70){
    notaLetra = "C";
}
else if (notaPorcentagem >= 60){
    notaLetra = "D";
}
else if (notaPorcentagem >= 50){
    notaLetra = "E";
}
if (notaPorcentagem < 50){
    notaLetra = "F";
}
if (notaPorcentagem < 0 || notaPorcentagem > 100){
    notaLetra = "ERRO: Nota invalida!"
}

console.log(notaLetra)