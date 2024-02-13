import {StyleSheet} from 'react-native';

// Store
import {useAppSelector} from '../store/hooks';

const useGlobalStyle = () => {
  const {mode} = useAppSelector(state => state.app);

  const Colors = {
    primary: '#214C8B',

    // Main colors based on scheme
    light: {
      background: '#fff',
      text: '#1f1f1f',
      card: '#fff',
      border: '#ddd',
    },
    dark: {
      background: '#1f1f1f',
      text: '#fff',
      card: '#1f1f1f',
      border: '#333',
    },
  };

  const globalStyles = StyleSheet.create({
    page: {
      backgroundColor: Colors[mode].background,
      flex: 1,
      paddingHorizontal: 20,
    },
    pageTitle: {
      fontSize: 22,
      fontFamily: 'Mada-SemiBold',
      marginTop: 10,
      marginBottom: 10,
      color: Colors[mode].text,
      textAlign: 'center',
    },
  });

  return {globalStyles, Colors};
};

export default useGlobalStyle;
