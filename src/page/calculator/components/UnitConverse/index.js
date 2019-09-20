import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Utlis from "../../../../../utlis/utlis";

import styles from './styles'
import UnitHeader from '../Header'
import Dropdown from "../../../../components/Dropdown";
import { unitData } from "../../../../mock/units.js";

const utlis = new Utlis();
export default class UnitConversion extends Component{
  constructor (props) {
    super(props);
    this.state = {
      units: ['长度', '面积', '体积', '质量', '温度', '力'],
      currentIndex: 0,
      currentUnit: "千米(KM)",
      currentValue: 1
    };
  }
  showMenuList = () => {
    this.props.onOpenMenu()
  };
  switchTab (index) {
    const currentUnit = unitData[index].unit[0].item[0];
    this.setState({
      currentIndex: index,
      currentUnit
    })
  }
  onChangeUnit = (current) => {
    this.setState({
      currentUnit: current
    })
  };
  render() {
    const { units, currentIndex, currentUnit, currentValue } = this.state;
    const currentUnitData = unitData[currentIndex];
    return (
      <View style={styles.unitWrapper}>
        <UnitHeader
          onShowMenu={this.showMenuList}
          title="单位换算"
        />
        <View style={styles.unitsList}>
          {
            units.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.unitItem}
                  key={item}
                  activeOpacity={0.6}
                  onPress={() => {this.switchTab(index)}}
                >
                  {
                    currentIndex === index ?
                      <View style={styles.bottomActive}/>
                      : null
                  }
                  <Text style={styles.unitItemText}>{item}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <View style={styles.unitInputWrapper}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(currentValue) => this.setState({currentValue})}
            value={currentValue.toString()}
          />
          <Dropdown
            styles={styles.picker}
            sourceData={ currentUnitData }
            changeCurrentUnit={ this.onChangeUnit }
          />
        </View>
        <View style={styles.unitResult}>
          <ScrollView style={styles.unitScrollView}>
            {
              currentUnitData.unit.map(type => {
                return (
                  <View key={type.id}>
                    {
                      type.item.map(unit => {
                        return (
                          <View key={unit}  style={styles.unitResultItem}>
                            <Text style={[styles.textStyle, {flex: 1}]}>
                              { currentValue === "" ? 0 : currentValue }
                            </Text>
                            <Text style={[styles.textStyle, {flex: 2}]}>{ currentUnit }</Text>
                            <Text style={[styles.textStyle, {flex: 1}]}>等于</Text>
                            <Text style={[styles.textStyle, {flex: 4, overflow: 'hidden'}]}>
                              { utlis.unitConverse(currentValue, currentUnit, unit, currentIndex) }
                            </Text>
                            <Text style={[styles.textStyle, {flex: 2}]}>{ unit }</Text>
                          </View>
                        )
                      })
                    }
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}