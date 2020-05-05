const casa = {
  paredes: 4,
  portas: 5,
  teto: 1,
};

function parteI (obj, valor, chave) {
  const objeto = obj;
  let newkey = chave;
  const conteudo = valor;
  objeto[newkey] = conteudo;

  return objeto;
}

parteI(casa, 'eduardo', 'proprietario')

console.log(Object.keys(casa));

console.log(Object.values(casa));

console.log(Object.entries(casa));