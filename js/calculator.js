function Calculator(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
}

Calculator.prototype.addition = function(number1,number2) {
  return number1 + number2;
};

Calculator.prototype.subtraction = function(number1,number2) {
  return number1 - number2;
};

Calculator.prototype.multiplication = function(number1, number2) {
  return number1 * number2;
};

Calculator.prototype.division = function(number1, number2) {
  return number1 / number2;
};
//
// Calculator.prototype.subtraction = function() {
//   var subtract = function subtraction (number1, number2) {
//     return number1 - number2;
//   };
// }
//
// Calculator.prototype.multiplication = function() {
//   var multiply = function multiplication (number1, number2) {
//     return number1 * number2;
//   };
// }
//
// Calculator.prototype.division = function() {
//   var divide = function division (number1, number2) {
//     return number1 / number2;
//   };
// }

exports.calculatorModule = Calculator;
