import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchbox: {
    borderWidth: 1,
    borderColor: '#C1C1C1',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchInput: {
    height: 40,
    width: '75%',
    paddingHorizontal: 10,
    color: '#818181',
    fontFamily: 'Mada-Medium',
    fontSize: 13,
  },
  searchActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  clearButton: {
    backgroundColor: '#C1C1C1',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 7,
  },
  clearText: {
    color: '#fff',
    fontFamily: 'Mada-Bold',
    fontSize: 13,
  },
});

export default styles;
