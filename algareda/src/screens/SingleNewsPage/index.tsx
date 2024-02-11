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
import {useNavigation} from '@react-navigation/native';

// Models
import {RootStackParamList} from '../../models/navigation.model';

// Styles
import styles from './styles';
import globalStyles from '../../styles/global';

// Assets
import ArrowLeftIcon from '../../assets/media/svg/arrow-left-icon.svg';

const SingleNewsPage = () => {
  const IMAGE_HEIGHT = 400;
  const [showBlur, setShowBlur] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const opacity = useSharedValue(0);

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
  }, []);

  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Animated.View style={[styles.backButtonBody, backButtonAnimatedStyle]}>
          <ArrowLeftIcon />
        </Animated.View>
      </TouchableOpacity>

      <Animated.ScrollView ref={scrollRef}>
        <Animated.Image
          source={{
            uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12584/production/_132604157_princeharry.png.webp',
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
            <Text style={styles.date}>Sunday, 9 May 2021</Text>
            <Text style={styles.title}>
              Crypto investors should be prepared to lose all their money, BOE
              governor says
            </Text>
            <Text style={styles.author}>Published by Ryan Browne</Text>

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

          <Text style={styles.contentText}>
            LONDON — Cryptocurrencies “have no intrinsic value” and people who
            invest in them should be prepared to lose all their money, Bank of
            England Governor Andrew Bailey said. Digital currencies like
            bitcoin, ether and even dogecoin have been on a tear this year,
            reminding some investors of the 2017 crypto bubble in which bitcoin
            blasted toward $20,000, only to sink as low as $3,122 a year later.
            Asked at a press conference Thursday about the rising value of
            cryptocurrencies, Bailey said: “They have no intrinsic value. That
            doesn’t mean to say people don’t put value on them, because they can
            have extrinsic value. But they have no intrinsic value.” “I’m going
            to say this very bluntly again,” he added. “Buy them only if you’re
            prepared to lose all your money.” Bailey’s comments echoed a similar
            warning from the U.K.’s Financial Conduct Authority. “Investing in
            cryptoassets, or investments and lending linked to them, generally
            involves taking very high risks with investors’ money,” the
            financial services watchdog said in January. “If consumers invest in
            these types of product, they should be prepared to lose all their
            money.” Bailey, who was formerly the chief executive of the FCA, has
            long been a skeptic of crypto. In 2017, he warned: “If you want to
            invest in bitcoin, be prepared to lose all your money.” LONDON —
            Cryptocurrencies “have no intrinsic value” and people who invest in
            them should be prepared to lose all their money, Bank of England
            Governor Andrew Bailey said. Digital currencies like bitcoin, ether
            and even dogecoin have been on a tear this year, reminding some
            investors of the 2017 crypto bubble in which bitcoin blasted toward
            $20,000, only to sink as low as $3,122 a year later. Asked at a
            press conference Thursday about the rising value of
            cryptocurrencies, Bailey said: “They have no intrinsic value. That
            doesn’t mean to say people don’t put value on them, because they can
            have extrinsic value. But they have no intrinsic value.” “I’m going
            to say this very bluntly again,” he added. “Buy them only if you’re
            prepared to lose all your money.” Bailey’s comments echoed a similar
            warning from the U.K.’s Financial Conduct Authority. “Investing in
            cryptoassets, or investments and lending linked to them, generally
            involves taking very high risks with investors’ money,” the
            financial services watchdog said in January. “If consumers invest in
            these types of product, they should be prepared to lose all their
            money.” Bailey, who was formerly the chief executive of the FCA, has
            long been a skeptic of crypto. In 2017, he warned: “If you want to
            invest in bitcoin, be prepared to lose all your money.”
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default SingleNewsPage;
