import i18next from 'i18next';
import {initReactI18next} from '../../node_modules/react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

export default i18next;
