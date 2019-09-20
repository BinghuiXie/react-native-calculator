const unitData = [
  {
    key: "长度",
    unit: [{
      id: 0,
      type: "公制",
      item: ["千米(KM)", "米(M)", "分米(DM)", "厘米(CM)", "毫米(MM)", "微米(UM)", "纳米(NM)"]
    }, {
      id: 1,
      type: "英制",
      item: ["英寸(IN)", "英尺(FT)", "码(YD)", "英里(MI)", "海里(NMI)"]
    }, {
      id: 2,
      type: "市制",
      item: ["里", "丈", "尺", "寸", "分", "厘", "毫"]
    }]
  },
  {
    key: "面积",
    unit: [{
      id: 0,
      type: "公制",
      item: ["平方千米(KM²)", "公顷(HA)", "公亩(ARE)", "平方米(M²)", "平方分米(DM²)", "平方厘米(CM²)", "平方毫米(MM²)"]
    }, {
      id: 1,
      type: "英制",
      item: ["英亩(ACRE)", "平方英里(SQ.MI)", "平方码(SQ.YD)", "平方英尺(SQ.FT)", "平方英寸(SQ.IN)", "平方竿(SQ.RD)"]
    }, {
      id: 2,
      type: "市制",
      item: ["顷", "亩", "平方尺", "平方寸"]
    }]
  },
  {
    key: "体积",
    unit: [{
      id: 0,
      type: "公制",
      item: ["立方米(M³)", "立方分米(DM³)", "立方厘米(CM³)", "立方毫米(MM³)", "升(L)", "分升(DL)", "毫升(ML)", "厘升(CL)", "公石(HL)", "微升(UL)", ]
    }, {
      id: 1,
      type: "英制",
      item: ["立方英尺(CU FT)", "立方英寸(CU IN)", "立方码(CU YD)", "亩英尺", "英制加仑(UK GAL)", "美制加仑(US GAL)", "英制液体盎司(OZ)", "美制液体盎司(OZ)"]
    }]
  },
  {
    key: "质量",
    unit: [{
      id: 0,
      type: "公制",
      item: ["千克(KG)", "克(G)", "毫克(MG)", "微克(UG)", "吨(T)", "公担(Q)", "克拉(CT)", "分(POINT)"]
    }, {
      id: 1,
      type: "英制",
      item: ["磅(LB)", "盎司(OZ)", "克拉(CT)", "格令(GR)", "长吨(LT)", "短吨(ST)", "英担", "美担", "英石(ST)", "打兰(DR)"]
    }, {
      id: 2,
      type: "市制",
      item: ["担", "斤", "两", "钱"]
    }]
  },
  {
    key: "温度",
    unit: [{
      id: 0,
      type: "",
      item: ["摄氏度(℃)", "华氏度(℉)", "列式度(°RE)", "开尔文(K)", "兰式度(°R)"]
    }]
  },
  {
    key: "力",
    unit: [{
      id: 0,
      type: "",
      item: ["牛(N)", "千牛(KN)", "千克力(KGF)", "克力(GF)", "公吨力(TF)", "磅力(LBF)", "千磅力(KIP)", "达因(DYN)"]
    }]
  }
];

export { unitData }
