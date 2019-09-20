import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const commonColor = '#cccccc';
const styles = StyleSheet.create({
  unitWrapper: {
    flex: 1
  },
  unitsList: {
    height: 30,
    backgroundColor: '#6495ED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  unitItem: {
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
  unitItemText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  unitInputWrapper: {
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
  unitResult: {
    flex: 8,
    borderWidth: 1,
    borderColor: commonColor,
    borderRadius: 4,
    position: 'absolute',
    right: 6,
    left: 6,
    bottom: 6,
    height: height - 165,
    top: 135
  },
  unitScrollView: {
    flex: 1
  },
  unitResultItem: {
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