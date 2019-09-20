import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  menuWrapper: {
    width: width,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    transform: [{translateX: width}]
  },
  menuContainer: {
    width: width * 0.8,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#eeeeee',
  },
  backHome: {
    position: 'absolute',
    left: 20,
    width: 24,
    height: 24,
    top: 10.5
  },
  menuTitle: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  menuList: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  menuItem: {
    width: width * 0.6,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;