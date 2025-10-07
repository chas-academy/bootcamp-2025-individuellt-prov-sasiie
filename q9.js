// skapa funktionerna som anropas i myCalculator så att de funkar så som koden och alla "cases" antyder

function myAddFunction(num1, num2) {
  return num1 + num2;
}

function mySubtractFunction(num1, num2) {
  return num1 - num2;
}

function myMultiplyFunction(num1, num2) {
  return num1 * num2;
}

function myDivisionFunction(num1, num2) {
  return num1 / num2;
}


export function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}
