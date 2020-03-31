let n = 7;
let symbol = "*";
let space = ' ';
let arrayHorizontal = ""; 
let variable = n;
let halfTriang = n/2;

if (n%2=0){
  halfTriang += 1;
  for (let i=0; i<n; i+=2){
    for (let j=0; j<=n; j++){
      if (j !=halfTriang){
        arrayHorizontal += space;
      }
      else {
          arrayHorizontal += symbol;
        }
      
    }
    variable-= 1;
    console.log(arrayHorizontal);;
    arrayHorizontal= '';
  }
}