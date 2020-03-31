let info = {
  personagem: "Margarida", 
  origem: "Pato Donald",
  nota: "Namorado do personagem primcipal dos quadrinhos do Pat0 Donald.",
};

//Exercício 1
console.log("Bem vinda," + info.personagem);

//Exercício 2
info.recorrente = 'sim';
console.log(info)

//Exercício 3
for (let i in info){
  console.log(i)
}

// Exercício 4
for (let i in info){
  console.log(info[i])
}

//Exercício 5
var info2 = {
  personagem : "Tio Patinhas",
  origem : "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota : "O ultimo Mc Patinhas",
  recorrente : "sim",
}

for (let i in info){
  if (info[i] === info2[i]){
    console.log("Ambos recorrentes");
  }else {
    console.log(info[i] + " e " + info2[i])
  }

}
