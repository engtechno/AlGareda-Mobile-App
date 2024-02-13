import {StyleSheet} from 'react-native';

// Store
import {useAppSelector} from '../../store/hooks';

// Global Styles
import useGlobalStyle from '../../hooks/useGlobalStyle';

const useStyles = () => {
  const {Colors} = useGlobalStyle();
  const {mode} = useAppSelector(state => state.app);

  const styles = StyleSheet.create({
    settings: {
      marginTop: 20,
    },
    darkMode: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: mode === 'light' ? '#f1f1f1' : '#292929',
      padding: 10,
      borderRadius: 10,
    },
    darkModeText: {
      fontSize: 15,
      fontFamily: 'Mada-Regular',
      color: Colors[mode].text,
    },
    language: {
      marginTop: 20,
    },
    languageText: {
      fontSize: 15,
      fontFamily: 'Mada-Regular',
      color: Colors[mode].text,
    },
    options: {
      marginTop: 7,
      flexDirection: 'row',
      alignItems: 'center',
    },
    lang: {
      backgroundColor: mode === 'light' ? '#f1f1f1' : '#292929',
      padding: 10,
      borderRadius: 10,
      marginRight: 10,
      flex: 1,
    },
    selected: {
      backgroundColor: Colors.primary,
    },
    selectedText: {
      color: '#fff',
    },
    langText: {
      fontSize: 14,
      fontFamily: 'Mada-Bold',
      color: Colors[mode].text,
      textAlign: 'center',
    },
  });

  return {styles};
};

export default useStyles;
