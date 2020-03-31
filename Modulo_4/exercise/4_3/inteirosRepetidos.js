function inteirosRepetidos(array){
  let numDeVezes =[];
  let counter = 0;
  let mostRepeat = 0;
  let indice =0;

  for (let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
      if (array[i] === array[j]){
        counter += 1;
      }
    }
    
    if (counter > mostRepeat){
      mostRepeat = counter;
      indice = i;
    }

    counter = 0;
  }

  return array[indice];
}

console.log(inteirosRepetidos([2, 3, 5, 8, 2, 3, 2]));