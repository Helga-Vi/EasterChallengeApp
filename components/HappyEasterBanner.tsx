// components/HappyEasterBanner.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from "react-native";

interface HappyEasterBannerState {
  isVisible: boolean;
}

const HappyEasterBanner = () => {
  const [state, setState] = useState<HappyEasterBannerState>({
    isVisible: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prevState => ({
        ...prevState,
        isVisible: !prevState.isVisible,
      }));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const { isVisible } = state;

  return (
    <Animated.View style={[
      styles.textContainer,
      { display: isVisible ? 'flex' : 'none' },
      { marginTop: 50},
    ]}>
      <Text style={styles.textStyle}>Happy Easter!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute', // Keep it in place
    top: 15, // Position at the bottom of the screen
    left: 0, 
    right: 0,
    width: '100%', // Set a fixed width
    height: 60, // Set a fixed height
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10, 
    paddingBottom: 20,
    transitionProperty: 'all',
    transitionDuration: '100ms', 
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF7E70',
    textShadowColor: 'rgba(255,255,255,0.5) 2px 2px 5px',
  },
});

export default HappyEasterBanner;