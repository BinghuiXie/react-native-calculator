import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles'

export default class PreLoad extends Component{
  render() {
    return (
      <View style={styles.preLoadWrapper}>
        <Image
          style={styles.calculatorIcon}
          source={require('../../assets/icons/Calculator.png')}
        />
        <Text style={styles.calculatorText}>Calculator</Text>
      </View>
    );
  }
}
