import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedRef,
  useScrollViewOffset,
  useAnimatedStyle,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

// Store
import {useAppSelector} from '../../store/hooks';

// Models
import {RootStackParamList} from '../../models/navigation.model';
import {ISingleNews} from '../../models/news.model';

// Styles
import useStyles from './useStyles';
import useGlobalStyle from '../../hooks/useGlobalStyle';

// Assets
import ArrowLeftIcon from '../../assets/media/svg/arrow-left-icon.svg';

// Utils
import {formatDate} from '../../utils/function.util';

const SingleNewsPage = () => {
  const IMAGE_HEIGHT = 400;
  const [showBlur, setShowBlur] = useState(false);
  const [goBackClicked, setGoBackClicked] = useState(false);

  const {news} = useAppSelector(state => state.app);

  const {globalStyles} = useGlobalStyle();
  const {styles} = useStyles();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<{data: {title: string}}, 'data'>>();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const opacity = useSharedValue(0);

  const article: ISingleNews = news.find(
    (item: ISingleNews) => item.title === route.params.title,
  );

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [-IMAGE_HEIGHT / 2, 0, IMAGE_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [2, 1, 2],
          ),
        },
      ],
    };
  });

  const backButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        scrollOffset.value,
        [0, IMAGE_HEIGHT],
        ['rgba(255, 255, 255, 0.7)', 'rgba(0, 0, 0, 1)'],
      ),
      backgroundColor: interpolateColor(
        scrollOffset.value,
        [0, IMAGE_HEIGHT],
        ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 1)'],
      ),
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setShowBlur(true);
    }, 300);

    opacity.value = withTiming(1, {
      duration: 700,
    });
    ``;
  }, []);

  useEffect(() => {
    if (!showBlur && goBackClicked) navigation.goBack();
  }, [showBlur]);

  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity
        onPress={() => {
          setShowBlur(false);
          setGoBackClicked(true);
        }}
        style={styles.backButton}>
        <Animated.View style={[styles.backButtonBody, backButtonAnimatedStyle]}>
          <ArrowLeftIcon />
        </Animated.View>
      </TouchableOpacity>

      <Animated.ScrollView ref={scrollRef}>
        <Animated.Image
          source={{
            uri: article.urlToImage,
          }}
          style={[
            styles.thumb,
            {
              height: IMAGE_HEIGHT,
            },
            imageAnimatedStyle,
          ]}
        />

        <View style={[globalStyles.page, styles.content]}>
          <Animated.View style={[styles.headBox, {opacity: opacity}]}>
            <Text style={styles.date}>{formatDate(article.publishedAt)}</Text>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.author}>Published by {article.author}</Text>

            {showBlur && (
              <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={0}
                overlayColor="transparent"
                blurRadius={10}
              />
            )}
          </Animated.View>

          <Text style={styles.contentText}>{article.content}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default SingleNewsPage;
