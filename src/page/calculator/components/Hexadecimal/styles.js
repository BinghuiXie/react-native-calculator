import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;
const keyWidth = deviceWidth / 4;
const keyHeight = height * 1.93 / 3 / 6;

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  symbols: {
    width: keyWidth,
    height: keyHeight,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: keyHeight,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    borderRightWidth: 1
  },
  equal: {
    width: 3 * keyWidth,
    height: keyHeight,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: keyHeight,
    borderBottomWidth: 1,
    borderColor: '#6495ED',
    borderRightWidth: 1,
    backgroundColor: '#6495ED',
    fontSize: 40,
  },
});

export default styles