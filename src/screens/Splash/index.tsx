import React, { useEffect, useState } from 'react';
import { View, Text, Animated, LayoutAnimation } from 'react-native';
import LottieView from 'lottie-react-native';

const slide1 = require('../../../assets/lottie/1.json');
const slide2 = require('../../../assets/lottie/2.json');
const slide3 = require('../../../assets/lottie/3.json');

const style = {
  width: 400,
  height: 400,
};

const SplashScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideX] = useState(new Animated.Value(style.width));

  const slideIn = () => {
    LayoutAnimation.configureNext({
      duration: 2000,
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    });
    Animated.timing(slideX, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    LayoutAnimation.configureNext({
      duration: 1000,
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    });
    Animated.timing(slideX, {
      toValue: style.width,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn();
  }, []);

  return (
    <View>
      {currentSlide === 0 && (
        <LottieView
          style={style}
          source={slide1}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            setCurrentSlide(1);
            slideOut();
          }}
        />
      )}
      {currentSlide === 1 && (
        <LottieView
          style={style}
          source={slide2}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            setCurrentSlide(2);
            slideIn();
          }}
        />
      )}
      {currentSlide === 2 && (
        <LottieView
          style={style}
          source={slide3}
          autoPlay
          loop={false}
          onAnimationFinish={() => console.log('Home')}
        />
      )}
    </View>
  );
};

export default SplashScreen;
