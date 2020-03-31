var numeroRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanosConvert(romanosNumber){
  var normalNumbers = [];

//Lê o algarismo romano separadamente.
  for (let i=0; i<romanosNumber.length; i++){
    normalNumbers[i] = numeroRomanos[romanosNumber[i]]
  }

  var baseOperator = normalNumbers[0];
  var somaFinal = normalNumbers[0];
//Soma os algarismos romanos de acordo com a posição.
  for (let j=1; j<normalNumbers.length; j++){
    if (baseOperator<normalNumbers[j]){
      somaFinal = normalNumbers[j] - somaFinal;
    }
    else if (baseOperator>=normalNumbers[j]){
      somaFinal += normalNumbers[j];
    }
  }
  return somaFinal;
}

//Testes da Função

console.log(romanosConvert('XI'));
console.log(romanosConvert('IIX'));
console.log(romanosConvert('XC'));
console.log(romanosConvert('C'));
console.log(romanosConvert('CM'));