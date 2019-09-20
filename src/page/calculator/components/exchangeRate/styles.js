import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const commonColor = '#cccccc';
const styles = StyleSheet.create({
  rateWrapper: {
    flex: 1
  },
  ratesList: {
    height: 30,
    backgroundColor: '#6495ED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rateItem: {
    flex: 1
  },
  bottomActive: {
    position: 'absolute',
    bottom: -6,
    right: 2,
    left: 2,
    height: 4,
    backgroundColor: '#ffffff'
  },
  rateItemText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  rateInputWrapper: {
    flexDirection: 'row',
    flex: 1
  },
  inputBox: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 2,
    height: 45,
    marginHorizontal: 6,
    marginVertical: 8,
    borderColor: commonColor
  },
  picker: {
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 8,
    borderRadius: 2
  },
  rateResult: {
    flex: 8,
    borderWidth: 1,
    borderColor: commonColor,
    borderRadius: 4,
    position: 'absolute',
    right: 6,
    left: 6,
    bottom: 6,
    height: height - 165,
    top: 106
  },
  rateScrollView: {
    flex: 1
  },
  rateResultItem: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: commonColor
  },
  textStyle: {
    color: commonColor,
    fontSize: 12
  }
});

export default styles