import React, { Component } from 'react'
import { Animated, Dimensions, View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const { width } = Dimensions.get('window');

export default class Menu extends Component {
  animate = {
    translateAnim: new Animated.Value(width)
  };
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
    let { calcTypes } = this.state;
    let { translateAnim } = this.animate;
    if (this.props.showMenu) {
      Animated.timing(
        this.animate.translateAnim,
        {
          toValue: 0,
          duration: 500
        }
      ).start()
    } else {
      Animated.timing(
        this.animate.translateAnim,
        {
          toValue: width,
          duration: 500
        }
      ).start()
    }
    return (
      <Animated.View
        style={{
          width: width,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, .5)',
          transform: [{translateX: translateAnim}]
        }}
      >
        <View style={styles.menuContainer}>
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
      </Animated.View>
    )
  }
}
