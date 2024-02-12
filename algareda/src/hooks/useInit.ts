import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Localisation
import i18next from '../services/i18next';

// Store
import {useAppDispatch} from '../store/hooks';
import {setLanguage, setMode} from '../store/appSlice';

const useInit = () => {
  const dispatch = useAppDispatch();
  const [done, setDone] = useState(false);

  const getMode = async () => {
    const mode = (await AsyncStorage.getItem('mode')) || 'light';
    dispatch(setMode(mode as 'light' | 'dark'));
  };

  const getLanguage = async () => {
    const language = (await AsyncStorage.getItem('language')) || 'en';
    dispatch(setLanguage(language as 'en' | 'es'));
    i18next.changeLanguage(language);
  };

  const init = async () => {
    await getMode();
    await getLanguage();
    setDone(true);
  };

  useEffect(() => {
    init();
  }, []);

  return {done};
};

export default useInit;
