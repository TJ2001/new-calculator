(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;

$("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log(operator);
    var simpleCalculator = new Calculator(1, 2);
    var output;
    if (operator === "add") {
      output = simpleCalculator.addition(number1, number2);
    } else if (operator === "subtract") {
      output = simpleCalculator.subtraction(number1, number2);
    } else if (operator === "multiply") {
      output = simpleCalculator.multiplication(number1, number2);
    } else if (operator === "divide") {
      output = simpleCalculator.division(number1, number2);
    }
    $("#output").text(output);
  });

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
