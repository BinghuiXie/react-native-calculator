import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default class Menu extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      calcTypes: ['10进制计算器', '16进制计算器', '单位换算计算器', '汇率计算器', '利息,贷款计算器']
    };
    this.onBackHome = this.onBackHome.bind(this);
  }
  
  onBackHome () {
    const showMenu = false;
    this.props.navigateToHome(showMenu);
  };
  
  choseCalcType (index) {
    this.props.getCurrentIndex(index, false);
  }
  
  render() {
    const { calcTypes } = this.state;
    return (
      <View style={styles.menuWrapper}>
        <View style={styles.menuTitle}>
          <TouchableOpacity
            style={styles.backHome}
            onPress={this.onBackHome}
          >
            <Image
              style={{width: 24, height: 24}}
              source={require('../../../../assets/icons/home.png')}
            />
          </TouchableOpacity>
          <Text style={styles.menuText}>多功能计算器</Text>
        </View>
        <View style={styles.menuList}>
          {
            calcTypes.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.7}
                  style={styles.menuItem}
                  onPress={() => {this.choseCalcType(index)}}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  }
}
