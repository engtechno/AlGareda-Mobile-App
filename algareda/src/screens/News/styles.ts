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
    paddingHorizontal: 10,
    color: '#818181',
    fontFamily: 'Mada-Medium',
    fontSize: 13,
  },
  newsfeed: {
    marginTop: 20,
  },
  wrapper: {
    gap: 20,
    marginBottom: 20,
  },
});

export default styles;
