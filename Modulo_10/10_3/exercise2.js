// fazendo uma new promisse e adequando dos passos 2 ao 5.

const promisse = new Promise((resolve, reject) => {
  let array = [];
  //const randomNumbers = () => Math.round((Math.random() * 50)); // gera de 1 a 50
  for (i=0; i<=10; i++) {
    array.push(Math.round((Math.random() * 50)));
  }
  const result = array.reduce((acc, number) => acc + number*number, 0);
  console.log(result)
  //const division = [2, 3, 5, 10].forEach((e) => result/e);
  return (result > 8000) ? reject() : resolve(result)
  }
)

promisse
  .then((result) => [2, 3, 5, 10].map((e) => result/e))
  .then((variavel) => console.log(variavel.reduce((acc, elem) => acc + elem, 0)))
  .catch(() => console.log('é mais de oito mil! Essa promise deve estar quebrada!'))
  
//promisse.catch(console.log(reject));