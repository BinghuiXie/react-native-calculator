import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

import styles from './styles'

export default class Dropdown extends Component{
  constructor (props) {
    super (props);
    this.state = {
      showDropDown: false,
      currentText: ""
    }
  }
  
  animate = {
    opacityAnim: new Animated.Value(0)
  };
  switchDropDownList () {
    let { showDropDown } = this.state;
    this.setState({
      showDropDown: !showDropDown
    })
  }
  switchCurrentType (current) {
    this.setState({
      currentText: current,
      showDropDown: false
    });
    this.props.changeCurrentUnit(current)
  }
  render() {
    const { sourceData } = this.props;
    const { showDropDown, currentText } = this.state;
    Animated.timing(
      this.animate.opacityAnim,
      {
        toValue: showDropDown ? 1 : 0,
        duration: 300
      }
    ).start();
    return (
      <View
        style={[styles.dropDown, this.props.styles]}
      >
        <TouchableOpacity
          style={styles.dropDownSelected}
          activeOpacity={0.7}
          onPress={() => {this.switchDropDownList()}}
        >
          <Text style={styles.selectedText}>
            {
              currentText === "" ? sourceData.unit[0].item[0] : currentText
            }
          </Text>
          <Image
            style={styles.dropDownIcon}
            source={require("../../assets/icons/drop-down.png")}
          />
        </TouchableOpacity>
        <Animated.View
          style={[styles.dropDownList, { opacity: this.animate.opacityAnim }]}
        >
          <ScrollView style={{height: height - 120, position: 'absolute', left: 0, right: 0}}>
            {
              sourceData.unit.map(typeList => {
                return (
                  <View key={typeList.id}>
                    <Text style={styles.dropDownTypeTitle}>{typeList.type}</Text>
                    {
                      typeList.item.map(data => {
                        return (
                          <TouchableOpacity
                            key={ data }
                            onPress={() => {this.switchCurrentType(data)}}
                          >
                            <Text style={styles.dropDownItem}>{data}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                )
              })
            }
          </ScrollView>
        </Animated.View>
      </View>
    )
  }
}