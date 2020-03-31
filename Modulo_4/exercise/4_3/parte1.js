let info = {
  personagem: ["Margarida"], 
  origem: ["Pato Donald"],
  nota: ["Namorado do personagem primcipal dos quadrinhos do Pat0 Donald."],
  recorrente: ['sim'],
};

console.log("Bem vinda," + info.personagem);

console.log(info)

for (let i in info){
  console.log(i)
}

for (let i in info){
  console.log(info[i])
}


info.personagem.push("Tio Patinhas");
info.origem.push("Christmas on Bear Mountain, Dell’s Four Color Comics #178");
info.nota.push("O ultimo Mc Patinhas");
info.recorrente.push("sim");

for (let i in info){
  console.log(info[i])
}
