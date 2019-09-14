class Utlis {
  /* 符号转换 */
  symbolTransform = (inputValue) => {
    inputValue = inputValue.toString();
    while (inputValue.indexOf("÷") !== -1) {
      inputValue = inputValue.replace("÷", "/");
    }
    while (inputValue.indexOf("×") !== -1) {
      inputValue = inputValue.replace("×", "*");
    }
    while (inputValue.indexOf("%") !== -1) {
      inputValue = inputValue.replace("%", "/100");
    }
    return inputValue;
  };
  /* 平方，开方计算 */
  powerCalc = (num, unit) => {
    return Math.pow(num, unit);
  };
  /* 添加历史记录 */
  appendHistory = (record) => {
  
  };
  /* 判断是不是数字 */
  isNumber = (param) => {
    return !isNaN(param)
  }
}

export default Utlis;