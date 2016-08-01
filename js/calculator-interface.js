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
