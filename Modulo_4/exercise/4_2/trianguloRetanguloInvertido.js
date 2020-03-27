let n = 4;
let symbol = "*";
let space = ' ';
let arrayHorizontal = ""; 
let variable = n;

for (let i=0; i<n; i++){
  for (let j=0; j<=n; j++){
    if (j < variable){
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