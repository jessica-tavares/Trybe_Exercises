let salarioBruto = 1000.00;
let salarioBrutoSemINSS = undefined;
let descontoINSS = undefined;
let descontoIR = undefined;
let salarioLiquido = undefined;

//Calculo do INSS
if (salarioBruto<=1556.95){
  descontoINSS = salarioBruto*0.08;
}
if ( salarioBruto>1556.95 && salarioBruto<2594.92 ){
  descontoINSS = salarioBruto*0.09;
}
if ( salarioBruto>2594.92 && salarioBruto<5189.82 ){
  descontoINSS = salarioBruto*0.11;
}
if ( salarioBruto>5189.82){
  descontoINSS = salarioBruto*0.11;
  if (descontoINSS > 570.88){
    descontoINSS = 570.88;
  }
}

salarioBrutoSemINSS = salarioBruto - descontoINSS;

//Calculo do desconto do IR

if ( salarioBrutoSemINSS>1903.99 && salarioBrutoSemINSS<2826.65){
  descontoIR = (salarioBrutoSemINSS*0.075) - 142.8;
}
if ( salarioBrutoSemINSS>2826.66 && salarioBrutoSemINSS<3751.05){
  descontoIR = (salarioBrutoSemINSS*0.15) - 354.8;
}
if ( salarioBrutoSemINSS>3751.06 && salarioBrutoSemINSS<4664.68){
  descontoIR = (salarioBrutoSemINSS*0.225) - 636.13;
}
if ( salarioBrutoSemINSS>4664.68){
  descontoIR = (salarioBrutoSemINSS*0.275) - 869.36;
} else {
  descontoIR = 0;
}

salarioLiquido = salarioBrutoSemINSS - descontoIR;

console.log(salarioLiquido);
