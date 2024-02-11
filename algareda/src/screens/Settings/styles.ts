import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/global';

const styles = StyleSheet.create({
  settings: {
    marginTop: 20,
  },
  darkMode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  darkModeText: {
    fontSize: 15,
    fontFamily: 'Mada-Regular',
    color: '#444',
  },
  language: {
    marginTop: 20,
  },
  languageText: {
    fontSize: 15,
    fontFamily: 'Mada-Regular',
    color: '#444',
  },
  options: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lang: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
  },
  selected: {
    backgroundColor: Colors.primary,
    color: '#fff',
  },
  langText: {
    fontSize: 14,
    fontFamily: 'Mada-Bold',
    color: '#444',
    textAlign: 'center',
  },
});

export default styles;
