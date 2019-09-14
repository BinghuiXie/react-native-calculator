import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Utlis from "../../../utlis/utlis";

import styles from './styles'

import DecimalCal from "./components/decimalCal";

const utli = new Utlis();

export default class CalculatorImplement extends Component{
  constructor (props) {
    super (props);
    this.state = {
      inputValue: "",
      result: "",
      calTypes: ['10', '0x', 'km', '$', '%', '^2'],
      currentIndex: 0
    };
  }
  
  getInputValue = (key) => {
    let { inputValue, result } = this.state;
    const isNum = utli.isNumber(key);
    if (key === 'AC') {
      inputValue = "";
      result = "";
    } else if (key === "C") {
      inputValue = inputValue.substring(0, inputValue.length - 1);
    } else if (key === "n²" || key === "√￣") {
      let unit = null;
      inputValue = utli.symbolTransform(inputValue);
      key === "n²" ?  unit = 2 : unit = 0.5;
      if (result !== "") {
        result = utli.powerCalc(eval(result), unit);
      } else {
        result = utli.powerCalc(eval(inputValue), unit);
      }
    } else if (key === "="){
      inputValue = utli.symbolTransform(inputValue);
      result = eval(inputValue);
      inputValue = result;
    } else {
      inputValue += key;
    }
    if (isNum) {
      inputValue = utli.symbolTransform(inputValue);
      result = eval(inputValue);
    }
    this.setState({
      inputValue,
      result
    })
  };
  
  onPressButton (index) {
    this.setState({
      currentIndex: index
    })
  }
  
  render() {
    const { inputValue, calTypes, result } = this.state;
    return (
      <View style={styles.calculatorImplement}>
        <View style={styles.resultWrapper}>
          <TextInput style={styles.textInput}>
            { inputValue }
          </TextInput>
          <Text style={[styles.textInput, styles.calResult]}>
            { result }
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <View
            style={styles.navigation}
          >
            {
              calTypes.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                        styles.navigationItem,
                        this.state.currentIndex === index ? styles.navigationActive : null
                    ]}
                    key={item}
                    onPress={() => {this.onPressButton(index)}}
                  >
                    <Text>
                      { item }
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <View style={styles.keyboard}>
            <DecimalCal getValue={this.getInputValue}/>
          </View>
        </View>
      </View>
    )
  }
}
