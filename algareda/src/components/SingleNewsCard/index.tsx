import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

// Styles
import styles from './styles';

// Models
import {RootStackParamList} from '../../models/navigation.model';

const SingleNewsCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.singleBox}
      onPress={() => navigation.navigate('SingleNews')}>
      <View style={styles.overlay}>
        <Text style={styles.title}>
          5 things to know about the 'conundrum' of lupus
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Matt Villano</Text>
          <Text style={styles.footerText}>Sunday, 9 May 2021</Text>
        </View>
      </View>

      <Image
        source={{
          uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12584/production/_132604157_princeharry.png.webp',
        }}
        style={styles.thumb}
      />
    </TouchableOpacity>
  );
};

export default SingleNewsCard;
