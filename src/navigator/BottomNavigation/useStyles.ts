import {StyleSheet} from 'react-native';

// Global Styles
import useGlobalStyle from '../../hooks/useGlobalStyle';

// Store
import {useAppSelector} from '../../store/hooks';

const useStyles = () => {
  const {Colors} = useGlobalStyle();
  const {mode} = useAppSelector(state => state.app);

  const styles = StyleSheet.create({
    tabBarStyle: {
      height: 60,
      position: 'absolute',
      bottom: 20,
      width: '60%',
      borderRadius: 40,
      left: '20%',
      backgroundColor: mode === 'light' ? '#f1f1f1' : '#292929',
      borderTopWidth: 0,
    },
    tabBarLabelStyle: {
      fontFamily: 'Mada-Medium',
      marginBottom: 5,
      fontSize: 12,
    },
    tabBarIcon: {marginBottom: -5},
  });

  return {styles};
};

export default useStyles;
