// components/HappyEasterBanner.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from "react-native";

interface HappyEasterBannerState {
  isVisible: boolean;
  opacity: number;
}

const HappyEasterBanner = () => {
  const [state, setState] = useState<HappyEasterBannerState>({
    isVisible: false,
    opacity: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prevState => {
        if (prevState.opacity === 1) return { ...prevState, opacity: 0 };
        return { ...prevState, opacity: prevState.opacity + 0.01 };
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const { opacity } = state;

  return (
    <Animated.View style={[
      styles.textContainer,
      { opacity },
      { marginTop: 75}
    ]}>
      <Text style={styles.textStyle}>Happy Easter!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    opacity: 0,
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
    marginBottom: 50, 
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF7E70',
    textShadowColor: 'rgba(255,255,255,0.5) 2px 2px 5px',
  },
});

export default HappyEasterBanner;