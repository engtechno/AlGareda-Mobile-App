import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  singleBox: {
    backgroundColor: '#ccc',
    borderRadius: 10,
},
overlay: {
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Mada-ExtraBold',
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Mada-Regular',
  },
  thumb: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
});

export default styles;
