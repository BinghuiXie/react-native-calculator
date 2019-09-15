import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

/* 十六进制和十进制运算的键盘是一样的样式 */
import styles from "./styles";

export default class Hexadecimal extends Component{
  constructor (props) {
    super (props);
    this.state = {
      keyBoards: [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '×', 'A', 'B', 'C', '÷', 'D', 'E', 'F', '⬅', '🚮', '=']
    };
  }
  
  onPressKey (key) {
    this.props.getValue(key);
  }
  
  render() {
    const { keyBoards } = this.state;
    return (
      <View style={styles.keyboard}>
        {
          keyBoards.map(item => {
            return item === '=' ?
              (
                <TouchableOpacity
                  key={ item }
                  style={styles.equal}
                  onPress={() => {this.onPressKey(item)}}
                >
                  <Text style={{fontSize: 32 }}>{ item }</Text>
                </TouchableOpacity>
              ) :
              (
                <TouchableOpacity key={ item } style={styles.symbols} onPress={() => {this.onPressKey(item)}}>
                  <Text style={{fontSize: 32}}>{ item }</Text>
                </TouchableOpacity>
              )
          })
        }
      </View>
    )
  }
}