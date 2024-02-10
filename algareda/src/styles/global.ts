import {StyleSheet} from 'react-native';

export const Colors = {
  primary: '#214C8B',
};

const globalStyles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontFamily: 'Mada-SemiBold',
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
});

export default globalStyles;
