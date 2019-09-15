isOperator = (current) => {
  const string = "+-×÷=";
  return string.indexOf(current) !== -1;
};

console.log(isOperator(1));