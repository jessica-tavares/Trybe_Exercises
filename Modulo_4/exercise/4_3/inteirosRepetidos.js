function inteirosRepetidos(array){
  let numDeVezes =[];
  let counter = 0;
  let test = numDeVezes[0];
  let indice =0;

  for (let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
      if (array[i] === array[j]){
        counter += 1;
      }
    }
    numDeVezes.push(counter)
    counter = 0;
  }
  for (let k=1; k<numDeVezes.length; k++){
    if(numDeVezes[k]>test){
      indice = k;
      test = numDeVezes[k];
    }
  }
  return array[indice];
}

console.log(inteirosRepetidos([2, 3, 5, 8, 2, 3, 3, 3]));