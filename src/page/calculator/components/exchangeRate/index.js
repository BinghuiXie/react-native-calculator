import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import Utlis from "../../../../../utlis/utlis";

import styles from './styles'
import RateHeader from '../Header'
import Dropdown from "../../../../components/Dropdown";
import rates from "../../../../mock/rates";

const utlis = new Utlis();
export default class ExchangeRate extends Component{
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentRate: "美元",
      currentValue: 1
    };
  }
  showMenuList = () => {
    this.props.onOpenMenu()
  };
  onChangeUnit = (current) => {
    this.setState({
      currentRate: current
    })
  };
  render() {
    const { currentRate, currentValue } = this.state;
    return (
      <View style={styles.rateWrapper}>
        <RateHeader
          onShowMenu={this.showMenuList}
          title="汇率计算"
        />
        <View style={styles.rateInputWrapper}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(currentValue) => this.setState({currentValue})}
            value={currentValue.toString()}
          />
          <Dropdown
            styles={styles.picker}
            sourceData={ rates }
            changeCurrentUnit={ this.onChangeUnit }
          />
        </View>
        <View style={styles.rateResult}>
          <ScrollView style={styles.rateScrollView}>
            {
              rates.unit.map(type => {
                return (
                  <View key={type.id}>
                    {
                      type.item.map(rate => {
                        return (
                          <View key={rate}  style={styles.rateResultItem}>
                            <Text style={[styles.textStyle, {flex: 1}]}>
                              { currentValue === "" ? 0 : currentValue }
                            </Text>
                            <Text style={[styles.textStyle, {flex: 2}]}>{ currentRate }</Text>
                            <Text style={[styles.textStyle, {flex: 1}]}>等于</Text>
                            <Text style={[styles.textStyle, {flex: 4, overflow: 'hidden'}]}>
                              { utlis.rateConverse(currentValue, currentRate, rate) }
                            </Text>
                            <Text style={[styles.textStyle, {flex: 2}]}>{ rate }</Text>
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