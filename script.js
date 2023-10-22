const output = document.querySelector(".output");
const inputExp = document.querySelector(".exp-input");

const regex = /(\+\+|\+-|\+\*|\+\/|\+\.|--|-\+|-\*|-\/|-\.|\*\+|\*-|\*\/|\*\.|\*\*|\/\+|\/-|\/\*|\/\/|\/\.|\.\.|\.\+|\.\*|\.-|\.\/)/g;

let exp = "";

// FUNCTION TO CREATE AN EXP----
function makeExp(z) {
  const temp = exp + z;
  if (!regex.test(temp)) {
    exp = exp + z;
    inputExp.textContent = exp;
  }
  console.log("exp", exp);
  console.log("regex", regex.test(temp));
}
// FUNCTION TO CALCULATE WITH EQUAL-----
function calculate() {
  const result = eval(exp);
  output.textContent = result;
}
// FUNTION TO CLEAR ALL INPUT EXP----
function deleteAll() {
  inputExp.textContent = "0";
  output.textContent = "_";
  exp = "";
}
// FUNCTION TO GET SQUARE ROOT -----
function SquareRoot() {
  const result = Math.sqrt(exp);
  output.textContent = result;
}
// FUNCTION TO DLT CHARACTERS ONE BY ONE----
function backSpace() {
  exp = exp.substring(0, exp.length - 1);
  inputExp.textContent = exp;
}
// FUNCTION TO GET PERCENTAGE------
function percentage() {
  const result = eval(exp) * 100;
  output.textContent = result;
}
