import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// pages
import PreLoad from "./src/page/preLoad";
import CalculatorImplement from "./src/page/calculator"

const AppStyles = StyleSheet.create({
  outerContainer: {
    flex: 1
  }
});

export default class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      timer: 0
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timer: 1
      })
    }, 1000)
  }
  
  render() {
    const { timer } = this.state;
    return (
      <View style={AppStyles.outerContainer}>
        {
          timer === 1 ? <CalculatorImplement />
          : <PreLoad />
        }
      </View>
    );
  }
}