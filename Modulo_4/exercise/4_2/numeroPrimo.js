let number = 9;
let verifDivisor = undefined;

for (let i=2; i<number; i++){
  verifDivisor = number%i;
  if (verifDivisor == 0){
    console.log("number não é primo!");
    break;
  }
}
if (verifDivisor != 0){
  console.log("Esse numero é primo")
}