const Math = {};

//funcion sumar
function add(x1, x2) {
  return x1 + x2;
}
//funcion restar
function substract(x1, x2) {
  return x1 - x2;
}
//funcion multiplicar
function multiply(x1, x2) {
  return x1 * x2;
}
//funcion dividir
function divide(x1, x2) {
  if (x2 == 0) {
    return console.log('no se puede dividir por ' + x2);
  } else {
    return x1 / x2;
  }
}

Math.suma = add;
Math.resta = substract;
Math.multipicacion = multiply;
Math.division = divide;

function hello(name) {
  console.log('Hola ', name);
}
exports.hola = hello;
//module.exports = hello;

module.exports.suma = add;
module.exports.resta = substract;
module.exports.multiplicacion = multiply;
module.exports.division = divide;
