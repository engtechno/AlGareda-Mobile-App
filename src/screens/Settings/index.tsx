import React from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import i18next from '../../services/i18next';
import {useTranslation} from '../../../node_modules/react-i18next';

// Store
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setLanguage, setMode} from '../../store/appSlice';

// Styles
import useGlobalStyle from '../../hooks/useGlobalStyle';
import useStyles from './useStyles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Models
import {BottomTabParamList} from '../../models/navigation.model';

const Settings = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {globalStyles} = useGlobalStyle();
  const {styles} = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParamList>>();
  const {language, mode} = useAppSelector(state => state.app);

  const languages = [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Spanish',
      code: 'es',
    },
  ];

  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageTitle}>{t('SETTINGS_PAGE_TITLE')}</Text>

      <View style={styles.settings}>
        <View style={styles.darkMode}>
          <Text style={styles.darkModeText}>{t('DARK_MODE')}</Text>
          <Switch
            value={mode === 'dark'}
            onValueChange={() => {
              dispatch(setMode(mode === 'dark' ? 'light' : 'dark'));
              AsyncStorage.setItem('mode', mode === 'dark' ? 'light' : 'dark');
            }}
          />
        </View>
      </View>

      <View style={styles.language}>
        <Text style={styles.languageText}>{t('LANGUAGE')}</Text>

        <View style={styles.options}>
          {languages.map(lang => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.lang,
                language === lang.code ? styles.selected : {},
              ]}
              onPress={() => {
                dispatch(setLanguage(lang.code as 'en' | 'es'));
                AsyncStorage.setItem('language', lang.code);
                i18next.changeLanguage(lang.code);
                navigation.navigate('News');
              }}>
              <Text
                style={[
                  styles.langText,
                  language === lang.code ? styles.selectedText : {},
                ]}>
                {lang.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Settings;
