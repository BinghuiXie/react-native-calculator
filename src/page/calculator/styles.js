import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const inputWidth = width * 0.85;

const styles = StyleSheet.create({
  calculatorImplement: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  resultWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000'
  },
  showExpression: {
    flex: 5
  },
  menu: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center'
  },
  Icon: {
    width: 24,
    height: 24
  },
  textInput: {
    color: '#ffffff',
    fontSize: 36,
    padding: 20,
    letterSpacing: 3,
    paddingBottom: 0
  },
  calResult: {
    color: '#cccccc',
    fontSize: 28
  },
  inputWrapper: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#eeeeee'
  },
  navigation: {
    backgroundColor: '#eeeeee',
    width: 65,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navigationItem: {
    width: 40,
    height: 40,
    borderRadius: 400,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cccccc'
  },
  navigationActive: {
    backgroundColor: 'orange'
  },
  keyboard: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});

export default styles;