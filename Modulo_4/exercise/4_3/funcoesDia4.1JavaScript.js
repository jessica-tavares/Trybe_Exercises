function adicao(a,b){
  return a+b;
}
console.log(adicao(35,8));

function subtracao(a,b){
  return a-b;
}
console.log(subtracao(35,8));

function multiplicacao(a,b){
  return a*b;
}
console.log(multiplicacao(35,8));

function divisao(a,b){
  return a/b;
}
console.log(divisao(35,8));

function modulo(a,b){
  return a%b;
}
console.log(modulo(35,8));

function maiorDeDois(num1,num2){
  if (num1>num2){
    return num1;
  } else {
    return num2;
  }
}
console.log(maiorDeDois(35,8));

function maiorDeTres(num1,num2,num3){
  if (num1>num2 && num1>num3){
    return num1;
  } 
  if (num2>num1 && num2>num3){
    return num2;
  } 
  if (num3>num1 && num3>num2) {
    return num3;
  }
}
console.log(maiorDeTres(35,8,86));

function negPosZero(valor){
  if (valor > 0){
    return "Positivo";
  }
  if (valor < 0){
    return "Negativo";
  }
  if (valor == 0){
    return "Zero";
  }
}
console.log(negPosZero(-8));

function triAngulos(ang1,ang2,ang3){
  let eUmTriangulo = undefined;

  if (ang1+ang2+ang3 == 180){
    return true;
  }
  else{
    return false + "Erro: Tais Angulos, não formam um Triângulo!";
  }
}

function xadrez(peca){
  let pecaLC = peca.toLocaleLowerCase();

  switch (pecaLC) {
    case "peao":
        return "O peão é peça mais numerosa e menos poderosa no tabuleiro de xadrez. Peões são diferentes no seu movimento. De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas. O peão não pode pular outras peças. Qualquer peça exatamente a frente de um peão bloqueia seu avanço para esta casa. O peão é a única peça que não pode mover-se para trás. O peão é também a única peça que não captura da mesma maneira que se move. Os peões capturam a peça adversária movendo-se diagonalmente uma casa - ele não pode capturar movendo-se para frente.";
        break;
    case "torre":
        return "A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças. A torre captura no mesmo caminho em que se move, ocupando a casa onde se encontra a peça adversária. A torre pode parar em qualquer casa do tabuleiro, sendo por isso uma das peças mais poderosas.";
        break;
    case "cavalo":
        return ". O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. O cavalo sempre termina seu movimento em uma casa de cor oposta à inicial. O cavalo pode pular sobre peças de qualquer cor enquanto vai para sua casa de destino, mas ele não captura nenhuma das peças que pula. O cavalo captura quando termina seu movimento na casa de uma peça adversária. O cavalo não pode terminar seu movimento em uma casa ocupada por uma peça da mesma cor. Uma vez que o movimento do cavalo não é em linha reta, ele pode atacar uma rainha, bispo ou torre sem ser atacado reciprocamente por esta peça.";
        break;
    case "bispo":
        return "O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças. O bispo captura no mesmo caminho em que ele se move, parando na casa da peça adversária. Devido à maneira como os bispos se movem, ele sempre permanece em casas da cor em que ele iniciou. Cada jogador começa com dois bispos, um nas casas pretas e outro nas brancas. Eles são frequentemente chamados de bispo da “casa preta” e bispo da “casa branca”. Os bispos podem também ser chamados de acordo com o lado em que eles iniciam o jogo - bispo do rei e bispo da rainha.";
        break;
    case "rainha":
        return "A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças. A rainha captura no mesmo caminho em que se move, ocupando a casa da peça adversária.";
        break;
    case "rei":
        return "O rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor. O rei captura outra peça da mesma maneira que se move, ocupando a casa da peça adversária. Existe um limite adicional ao movimento do rei. O rei não pode se mover para uma casa que o coloque sob ataque de uma peça adversária (chamado em “cheque”). Como resultado desta limitação, dois reis nunca poderão estar ao lado um do outro - uma vez que mover-se para o lado do outro rei o colocaria em cheque. O rei pode também ser forçado a mover-se ou capturar se estiver sob ataque (“cheque”) e a única maneira de interromper o ataque for mover o rei.";
        break;
    default:
        console.log("ERRO: Peça digitada inexistente.");

  }
}
console.log(xadrez("tOrre"));

function nota(notaPorcentagem){
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
  return notaLetra;
}
console.log(nota(56));

function par(num1,num2,num3){
  let result = undefined;

  if (num1%2==0 || num2%2==0 || num3%2==0){
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(par(35,8,7));

function impar(num1,num2,num3){
  let result = undefined;

  if (num1%2!=0 || num2%2!=0 || num3%2!=0){
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(impar(38,8,6));

function lucroProduto(custo,valorDeVenda){
  let lucroMil = undefined;

  if (custo >=0 && valorDeVenda >=0){
    lucroMil = 1000*(valorDeVenda - custo*1.2);
  } else {
    return "ERRO: um dos valores é menor de zero!";
  }

  return lucroMil;
}
console.log(lucroProduto(35,70));

function salarioLiquido(salarioBruto){
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

  return salarioLiquido;
}
console.log(salarioLiquido(6890));