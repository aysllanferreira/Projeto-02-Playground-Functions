// Desafio 11
const verifyNumbers = (tel) => tel.some((numeros) => numeros > 9 || numeros < 0);

const generatePhoneNumber = (tel) => {
  let count = 0;
  if (tel.length !== 11) return 'Array com tamanho incorreto.';
  const verify = verifyNumbers(tel);
  if (verify) return 'não é possível gerar um número de telefone com esses valores';
  for (let numbs of tel) {
    count = tel.filter((numero) => (numero === numbs)).length;
    if (count >= 3) return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = `(${tel[0]}${tel[1]}) `;
  const num1 = `${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-`;
  const num2 = `${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
  return `${ddd}${num1}${num2}`;
};

// Desafio 12
function testaTriangulo(prop1, prop2, prop3) {
  if (prop1 < prop2 + prop3 && prop2 < prop1 + prop3 && prop3 < prop2 + prop1) {
    return true;
  }
}

function testaTriangulo2(prop1, prop2, prop3) {
  if (
    prop1 > Math.abs(prop2 - prop3) && prop2 > Math.abs(prop1 - prop3)
    && prop3 > Math.abs(prop1 - prop3)
  ) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  if (testaTriangulo(lineA, lineB, lineC) === true
    && testaTriangulo2(lineA, lineB, lineC) === true) {
    return true;
  }
  return false;
}

// Desafio 13
const hydrate = (copos) => {
  let somaDrinks = 0;

  for (const bebidas of copos) {
    if (bebidas >= 1) {
      const qntBebidas = parseInt(bebidas, 10);
      somaDrinks += qntBebidas;
    }
  }

  if (somaDrinks === 1) return `${somaDrinks} copo de água`;
  return `${somaDrinks} copos de água`;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
