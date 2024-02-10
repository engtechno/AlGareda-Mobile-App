import React from 'react';
import {Image, View} from 'react-native';

// Styles
import styles from './styles';
import globalStyles from '../../styles/global';

const SingleNewsPage = () => {
  return (
    <View style={globalStyles.page}>
      <Image
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12584/production/_132604157_princeharry.png.webp',
        }}
        style={styles.thumb}
      />
    </View>
  );
};

export default SingleNewsPage;
