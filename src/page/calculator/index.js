import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Utlis from "../../../utlis/utlis";

import styles from './styles'

import DecimalCal from "./components/decimalCal";
import Hexadecimal from "./components/Hexadecimal";
import Menu from "./components/Menu";
import UnitConversion from "./components/UnitConverse";
import ExchangeRate from "./components/exchangeRate";

const utli = new Utlis();

export default class CalculatorImplement extends Component{
  constructor (props) {
    super (props);
    this.state = {
      operand: "", // 操作数
      inputValue: [], // 输入待计算的值
      showValue: [], // 用于显示的值
      result: "",
      calTypes: ['10', '0x', 'km', '$', '%', '^2'],
      currentIndex: 0,
      showMenu: false
    };
    this.getCurrentType = this.getCurrentType.bind(this);
  }
  
  getInputValue = (key) => {
    let { inputValue, expressStart, expressEnd, result, currentIndex, operand, showValue } = this.state;
    const isOperator = utli.isOperator(key);
    if (currentIndex === 1 && !inputValue.length) {
      key = '0x' + key;
    }
    if (key === '⬅') {
      showValue.pop();
      inputValue.pop();
    } else if (key === '🚮') {
      showValue = [];
      inputValue = [];
      result = "";
    } else if (key === 'n²' || key === '√￣') {
      let unit = null;
      const expression = utli.symbolTransform(inputValue);
      key === "n²" ?  unit = 2 : unit = 0.5;
      if (result !== "") {
        result = utli.powerCalc(eval(result), unit);
      } else {
        result = utli.powerCalc(eval(expression), unit);
      }
    } else if (key === '='){
      showValue = Array.from(result.toString());
      inputValue = Array.from(result.toString());
    } else {
      if (!showValue.length && currentIndex === 1) {
        showValue.push(key.substring(2, key.length));
      } else {
        showValue.push(key)
      }
      inputValue.push(key);
      if (isOperator) {
        /* 是操作符 */
        if (currentIndex === 1) {
          let currentOperator = inputValue[inputValue.length - 1];
          currentOperator = currentOperator + '0x';
          inputValue[inputValue.length - 1] = currentOperator;
        }
      } else {
        const expression = utli.symbolTransform(inputValue);
        if (expression.indexOf("(") === -1 || expression.indexOf(")") !== -1) {
          result = eval(expression);
        }
      }
    }
    
    this.setState({
      operand,
      result,
      inputValue,
      showValue
    })
  };
  
  onPressButton (index) {
    let { inputValue, showValue, result } = this.state;
    inputValue = [];
    showValue = [];
    result = "";
    this.setState({
      currentIndex: index,
      inputValue,
      showValue,
      result
    })
  }
  
  getCurrentComponent (index) {
    switch (index) {
      case 0:
        return (
          <DecimalCal getValue={this.getInputValue}/>
        );
      case 1:
        return (
          <Hexadecimal getValue={this.getInputValue}/>
        )
    }
  }
  
  onOpenMenu = () => {
    let { showMenu } = this.state;
    showMenu = true;
    this.setState({
      showMenu
    })
  };
  
  showHome = (showMenu) => {
    this.setState({
      showMenu
    })
  };
  
  getCurrentType () {
    const { currentIndex, showValue, result } = this.state;
    if (currentIndex === 0 || currentIndex === 1) {
      return (
        <View style={{flex: 1}}>
          <View style={styles.resultWrapper}>
            <View style={styles.showExpression}>
              <TextInput style={styles.textInput}>
                { showValue.join("") }
              </TextInput>
              <Text style={[styles.textInput, styles.calResult]}>
                { result }
              </Text>
            </View>
            <View style={styles.menu}>
              <TouchableOpacity
                style={styles.Icon}
                activeOpacity={0.7}
                onPress={this.onOpenMenu}
              >
                <Image
                  style={{width: 24, height: 24}}
                  source={require('../../assets/icons/menu.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Icon}
                activeOpacity={0.7}
              >
                <Image
                  style={{width: 24, height: 24}}
                  source={require('../../assets/icons/history.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.keyboard}>
              {
                this.getCurrentComponent(currentIndex)
              }
            </View>
          </View>
        </View>
      )
    }
    switch (currentIndex) {
      case 2:
        return (
          <UnitConversion onOpenMenu={this.onOpenMenu}/>
        );
      case 3:
        return (
          <ExchangeRate onOpenMenu={this.onOpenMenu} />
        );
      // case 4:
      //   return (
      //
      //   );
    }
  }
  
  switchType = (index, showMenu) => {
    let { inputValue, showValue, result } = this.state;
    inputValue = [];
    showValue = [];
    result = "";
    this.setState({
      currentIndex: index,
      inputValue,
      showValue,
      result,
      showMenu
    })
  };
  
  render() {
    const { showMenu } = this.state;
    return (
      <View style={styles.calculatorImplement}>
        <View style={{flex: 1}}>
          {
            this.getCurrentType()
          }
        </View>
        <Menu
          showMenu={showMenu}
          ref={ (e) => this.menu = e }
          navigateToHome={this.showHome}
          getCurrentIndex={this.switchType}
        />
      </View>
    )
  }
}
