// Desafio 1
const compareTrue = (valor1, valor2) => valor1 && valor2;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (lista) => {
  const primeiroItem = lista[0];
  const pegaUltimo = lista.length - 1;
  const ultimoItem = lista[pegaUltimo];

  return `${ultimoItem}, ${primeiroItem}`;
};

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
const highestCount = (lista) => {
  const highNumber = Math.max(...lista);
  return lista.filter((numero) => numero === highNumber).length;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  const perto1 = Math.abs(mouse - cat1);
  const perto2 = Math.abs(mouse - cat2);

  if (perto1 < perto2) return 'cat1';
  if (perto1 > perto2) return 'cat2';
  return 'os gatos trombam e o rato foge';
};

// Desafio 8
const fizzBuzz = (lista) => {
  let getFizzStrings = [];

  lista.forEach((numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) getFizzStrings.push('fizzBuzz');
    else if (numero % 3 === 0) getFizzStrings.push('fizz');
    else if (numero % 5 === 0) getFizzStrings.push('buzz');
    else getFizzStrings.push('bug!');
  });

  return getFizzStrings;
};

// Desafio 9
const encode = (frase) => frase
  .replace(/a/g, '1')
  .replace(/e/g, '2')
  .replace(/i/g, '3')
  .replace(/o/g, '4')
  .replace(/u/g, '5');

const decode = (frase2) => frase2
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u');

// Desafio 10
const techList = (lista, nome) => {
  const ordenarLista = lista.sort((a, b) => (a < b ? -1 : 1));
  const objeto = [];

  if (lista.length > 1) {
    ordenarLista.forEach((object) => {
      objeto.push({
        tech: object,
        name: nome,
      });
    });
    return objeto;
  }
  return 'Vazio!';
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
