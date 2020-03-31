function verificaFimPalavra(word,ending){
  let fimPalavra = '';
  let inicioVarredura = word.length - ending.length;

  for (let i=inicioVarredura; i<word.length; i++){
    fimPalavra = fimPalavra + word[i];
  }
  
  if (fimPalavra === ending){
    return true;
  }else {
    return false;
  }
}

console.log(verificaFimPalavra('Trybe', 'be'));
console.log(verificaFimPalavra("joaofernando", "fernan"));