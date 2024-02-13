import React, {FC, memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

// Styles
import styles from './styles';

// Models
import {RootStackParamList} from '../../models/navigation.model';
import {ISingleNews} from '../../models/news.model';

// Utils
import {formatDate, trimString} from '../../utils/function.util';

interface SingleNewsCardProps {
  data: ISingleNews;
}

const SingleNewsCard: FC<SingleNewsCardProps> = ({data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.singleBox}
      onPress={() =>
        navigation.navigate('SingleNews', {
          title: data.title,
        })
      }>
      <View style={styles.overlay}>
        <Text style={styles.title}>{data.title}</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{trimString(data.author)}</Text>
          <Text style={styles.footerText}>{formatDate(data.publishedAt)}</Text>
        </View>
      </View>

      {data.urlToImage && (
        <Image
          source={{
            uri: data.urlToImage,
          }}
          style={styles.thumb}
        />
      )}
    </TouchableOpacity>
  );
};

export default memo(SingleNewsCard);
