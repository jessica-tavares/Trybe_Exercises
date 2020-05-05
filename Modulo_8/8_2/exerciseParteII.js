const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercicio 1
const objAdd = (obj, chave, valor) => obj[chave] = valor;
objAdd(lesson2, 'turno', 'manha');
console.log(lesson2)

//exercicio 2
const allkeys = (obj) => Object.keys(obj);
console.log(allkeys(lesson2))

//exercicio 3
const objSize = (obj) => Object.keys(obj).length
console.log(objSize(lesson2));

// exercicio 4
const allValues = (obj) => Object.values(obj);
console.log(allValues(lesson2))

// exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

// exercicio 6
const number = (obj) => {
  let count = 0;
  for ( let i in obj){
    count += obj[i]['numeroEstudantes'];
  }
  return `O numero total de estudantes em todas as turmas é ${count}`
}
console.log(number(allLessons))

// exercicio 7
const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1, 0))

// exercicio 8 - unsolved yet
const verify = (obj, chave, valor) => {
  const objeto = obj[chave];
  if ( objeto === valor ) {
    return true;
  } else {
    return false;
  }
}
console.log(verify(lesson2, 'professor', 'Carlos'))

// Bonus 1
const classCount = (obj, clas) => {
  let count = 0;
  for ( let i in obj){
    if( obj[i]['materia'] === clas){
      count += obj[i]['numeroEstudantes'];
    }
  }
  return `O numero total de estudantes em ${clas} é ${count}`;
}
console.log(classCount(allLessons, 'Matemática'));

//Bonus 2
const createReport = (obj, teatcher) => {
  let count = 0;
  let aulas = [];
  let result = [];
  let prof = ';'
  for ( let i in obj){
    if( obj[i]['professor'] === teatcher){
      prof = obj[i]['professor'];
      aulas.push(obj[i]['materia'])
      count += obj[i]['numeroEstudantes'];
    }
  }
  result.push(`Professor: ${prof}`);
  result.push(`aulas: ${aulas}`);
  result.push(`estudantes: ${count}`);
  return result
}
console.log(createReport(allLessons, 'Maria Clara'));
