import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles'
import HistoryHeader from '../Header'

export default class History extends Component {
  render() {
    return (
      <View style={styles.historyContainer}>
        <HistoryHeader
          showBackIcon={true}
          title="历史记录"
        />
      </View>
    )
  }
}