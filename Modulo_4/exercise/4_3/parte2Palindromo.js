function verificapalindromo(word){
  let separeteString = word.split('');
  let invertString = '';
  let comprimento = separeteString.length;

  //virando a variável
  for( let i=1; i<=comprimento; i++){
    invertString = invertString + separeteString[comprimento - i];
  }

  //Comparando
  if (word === invertString){
    return true;
  }else {
    return false;
  }
}

console.log(verificapalindromo("mutum"));