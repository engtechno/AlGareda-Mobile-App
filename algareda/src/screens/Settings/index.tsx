import React from 'react';
import {Switch, Text, Touchable, TouchableOpacity, View} from 'react-native';

// Styles
import globalStyles from '../../styles/global';
import styles from './styles';

const Settings = () => {
  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageTitle}>Settings</Text>

      <View style={styles.settings}>
        <View style={styles.darkMode}>
          <Text style={styles.darkModeText}>Dark Theme</Text>
          <Switch />
        </View>
      </View>

      <View style={styles.language}>
        <Text style={styles.languageText}>Language</Text>

        <View style={styles.options}>
          <TouchableOpacity style={[styles.lang, styles.selected]}>
            <Text style={[styles.langText, styles.selected]}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lang}>
            <Text style={styles.langText}>العربية</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
