import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const commonColor = '#cccccc';

const styles = StyleSheet.create({
  dropDown: {
    width: 60,
    flex: 1
  },
  dropDownSelected: {
    borderWidth: 1,
    borderColor: commonColor,
    marginBottom: 4
  },
  selectedText: {
    color: commonColor,
    lineHeight: 40,
    textAlign: 'center'
  },
  dropDownIcon: {
    position: 'absolute',
    width: 12,
    height: 12,
    right: 6,
    top: 16
  },
  dropDownList: {
    borderWidth: 1,
    borderColor: commonColor,
    backgroundColor: '#ffffff',
    height: height - 120,
    zIndex: 20
  },
  dropDownTypeTitle: {
    color: commonColor,
    borderBottomWidth: 1,
    borderColor: commonColor,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8
  },
  dropDownItem: {
    textAlign: 'center',
    color: '#000000',
    paddingVertical: 10
  }
});

export default styles