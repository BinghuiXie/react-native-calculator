class Utlis {
  /* 符号转换 */
  symbolTransform = (inputValue) => {
    inputValue = inputValue.join("");
    inputValue = inputValue.replace(/÷/g, "/");
    inputValue = inputValue.replace(/×/g, "*");
    inputValue = inputValue.replace(/%/g, "/100");
    return inputValue;
  };
  /* 平方，开方计算 */
  powerCalc = (num, unit) => {
    return Math.pow(num, unit);
  };
  
  /* 按退格键，删除最后一个 “字符” */
  /* 接受一个数组作为入参，返回一个数组，只有一项，结果是删除最后一个字符以后的 */
  backSpace = (array) => {
    let res = [];
    array  = array.join("").split("");
    array.pop();
    res.push(array.join(""));
    return res;
  };
  
  /* 添加历史记录 */
  appendHistory = (record) => {
  
  };
  
  /* 判断当前输入的是不是操作符 */
  isOperator = (current) => {
    const string = "+-×÷=()";
    return string.indexOf(current) !== -1;
  };
  
  /* 进制转换 */
  // @param hex: 要转换为的进制
  hexadecimalConvert = (param, hex) => {
    /* 防止 param 不是字符串，先转换一下 */
    param = param.toString();
    return parseInt(param, hex)
  };
  
  /* 处理十六进制的字符串 */
  dealWithHexadecimal = (string) => {
    let result = string.toString(), hasChar = false;
    result = result.split("");
    let i = 0, j = 0;
    result.map(item => {
      if (item === "+" || item === '-' || item === "×" || item === "÷") {
        hasChar = true;
      }
    });
    while (i <= result.length) {
      if (result[i] === "+" || result[i] === '-' || result[i] === "×" || result[i] === "÷" || !result[i]) {
        result[j] = '0x' + result[j];
        j = i + 1;
      }
      i++;
    }
    result = result.join("");
    return result;
  }
}

export default Utlis;