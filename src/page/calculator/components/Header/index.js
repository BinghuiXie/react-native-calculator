import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles'

export default class UnitConversion extends Component{
  constructor (props) {
    super(props);
  }
  showMenuList = () => {
    this.props.onShowMenu();
  };
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={{color: '#ffffff', fontSize: 18}}>{this.props.title}</Text>
        <TouchableOpacity
          style={[styles.iconPosition, styles.rightIcon]}
          onPress={this.showMenuList}
        >
          <Image
            style={{width: 24, height: 24}}
            source={require('../../../../assets/icons/menu.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}