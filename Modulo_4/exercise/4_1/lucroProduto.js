let custo = 48;
let valorDeVenda = 90;
let lucroMil = undefined;


if (custo >=0 && valorDeVenda >=0){
  lucroMil = 1000*(valorDeVenda - custo*1.2);
} else {
  console.log("ERRO: um dos valores é menor de zero!");
}

console.log(lucroMil);