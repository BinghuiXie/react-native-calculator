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
  };
  
  /* 单位换算 */
  unitConverse = (unitValue, currentUnit, targetUnit, index) => {
    let res = null;
    let temp1, temp2;
    const unitMap = [
      {
        km: ['千米(KM)', 1.852],
        m: ['米(M)', 1852],
        dm: ['分米(DM)', 18520],
        cm: ['厘米(CM)', 185200],
        mm: ['毫米(MM)', 1852000],
        um: ['微米(UM)', 1852000000],
        nm: ['纳米(NM)', 1852000000000],
        inch: ['英寸(IN)', 72913.386],
        feet: ['英尺(FT)', 6076.1155],
        yard: ['码(YD)', 2025.3718285],
        mi: ['英里(MI)', 1.1507794],
        nmi: ['海里(NMI)', 1],
        li: ['里', 3.704],
        zhang: ['丈', 555.6],
        chi: ['尺', 5556],
        cun: ['寸', 55560],
        fen: ['分', 555600],
        _li: ['厘', 5556000],
        hao: ['毫', 55560000]
      },
      {
        km: ['平方千米(KM²)', 1],
        ha: ['公顷(HA)', 100],
        are: ['公亩(ARE)', 10000],
        m: ['平方米(M²)', 1000000],
        dm: ['平方分米(DM²)', 100000000],
        cm: ['平方厘米(CM²)', 10000000000],
        mm: ['平方毫米(MM²)', 10000000000000],
        acre: ['英亩(ACRE)', 247.10538],
        sqmi: ['平方英里(SQ.MI)', 0.3861022],
        sqyd: ['平方码(SQ.YD)', 1195990.0463],
        sqft: ['平方英尺(SQ.FT)', 10763910.4167],
        sqin: ['平方英寸(SQ.IN)', 1550003100.006],
        sqrd: ['平方竿(SQ.RD)', 39536.8610347],
        qing: ['顷', 15],
        mu: ['亩', 1500],
        chi: ['平方尺', 9000000],
        cun: ['平方寸', 900000000]
      },
      {
        km: ['立方米(M³)', 1],
        dm: ['立方分米(DM³)', 1000],
        cm: ['立方厘米(CM³)', 1000000],
        mm: ['立方毫米(MM³)', 1000000000],
        l: ['升(L)', 1000],
        dl: ['分升(DL)', 10000],
        ml: ['毫升(ML)', 1000000],
        cl: ['厘升(CL)', 100000],
        hl: ['公石(HL)', 10],
        ul: ['微升(UL)', 1000000000],
        cuft: ['立方英尺(CU FT)', 35.3147248],
        cuin: ['立方英寸(CU IN)', 61203.844],
        cuyd: ['立方码(CU YD)', 1.30795],
        mu: ['亩英尺', 0.0008107],
        ukgal: ['英制加仑(UK GAL)', 219.96915],
        usgal: ['美制加仑(US GAL)', 264.17205],
        ukoz: ['英制液体盎司(OZ)', 35198.8736],
        usoz: ['美制液体盎司(OZ)', 34164.6737]
      },
      {
        kg: ['千克(KG)', 1],
        g: ['克(G)', 1000],
        mg: ['毫克(MG)', 1000000],
        ug: ['微克(UG)', 1000000000],
        t: ['吨(T)', 0.001],
        q: ['公担(Q)', 0.01],
        ct: ['克拉(CT)', 5000],
        point: ['分(POINT)', 500000],
        lb: ['磅(LB)', 2.2046226],
        oz: ['盎司(OZ)', 35.2739619],
        ct2: ['克拉(CT)', 5000],
        gr: ['格令(GR)', 15432.3583529],
        lt: ['长吨(LT)', 0.0009842],
        st: ['短吨(ST)', 0.0011023],
        yd: ['英担', 0.0196841],
        md: ['美担', 0.0220462],
        shi: ['英石(ST)', 0.157473],
        dr: ['打兰(DR)', 564.3833912],
        dan: ['担', 0.02],
        jin: ['斤', 2],
        liang: ['两', 20],
        qian: ['钱', 0.02]
      },
      {
        c: ['摄氏度(℃)', 1],
        f: ['华氏度(℉)', 33.8],
        re: ['列式度(°RE)', 0.8],
        k: ['开尔文(K)', 274.15],
        r: ['兰式度(°R)', 493.47]
      },
      {
        n: ['牛(N)', 1],
        kn: ['千牛(KN)', 0.001],
        kgf: ['千克力(KGF)', 0.1019716],
        gf: ['克力(GF)', 101.971621],
        tf: ['公吨力(TF)', 0.000102],
        lbf: ['磅力(LBF)', 0.2248089],
        kip: ['千磅力(KIP)', 0.0002248],
        dyn: ['达因(DYN)', 100000]
      }
    ];
    const lengthMap = unitMap[index];
    Object.keys(lengthMap).map(item => {
      if(lengthMap[item][0] === currentUnit) {
        temp1 = lengthMap[item]
      }
      if(lengthMap[item][0] === targetUnit) {
        temp2 = lengthMap[item]
      }
    });
    res = unitValue * (temp2[1] / temp1[1]);
    return res.toPrecision(7);
  }
  
  /* 汇率计算 */
  rateConverse = (rateValue, currentRate, targetRate) => {
    let res = null;
    let temp1, temp2;
    const rateMap = {
      ren: ['人民币', 1],
      dollar: ['美元', 0.14088],
      ou: ['欧元', 0.12751],
      bang: ['英镑', 0.11279],
      fa: ['法郎', 0.83643],
      xian: ['先令', 1.75462],
      ri: ['日元', 15.22],
      bi: ['比索', 7.95946],
      make: ['马克', 0.24939],
      lubi: ['卢比', 10.0238]
    };
    Object.keys(rateMap).map(item => {
      if(rateMap[item][0] === currentRate) {
        temp1 = rateMap[item]
      }
      if(rateMap[item][0] === targetRate) {
        temp2 = rateMap[item]
      }
    });
    res = rateValue * (temp2[1] / temp1[1]);
    return res.toPrecision(7);
  }
}

export default Utlis;