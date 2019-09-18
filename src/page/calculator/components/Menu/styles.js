import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  menuWrapper: {
    flex: 1
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
    width: width * 0.8,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;