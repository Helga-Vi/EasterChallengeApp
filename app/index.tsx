import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import {Audio} from 'expo-av';

const HappyEasterBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {
      animatedValue.stopAnimation();
    };
  }, []);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Animated.Text style={[
      styles.textStyle,
      { 
        marginTop: 75  // Adjust this value as needed for vertical positioning
      }
    ]}>
    <Animated.Text style={{ opacity }}>
      Happy Easter!
    </Animated.Text>
    </Animated.Text>
  );
}; 

const Index = () => {
  const playCluckSound = async () => {
    try {
      await Audio.setCategoryAsync('Playback');
    
      const { sound, error } = await Audio.Sound.createAsync(
        require('./sounds/cluck.mp3')
      );
  
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
  
      await sound.playAsync();
      await sound.setVolumeAsync(1.0);
  
    } catch (error) {
      console.error("Error playing sound", error);
    }
  };

  return (
    <View style={styles.container}>
      <HappyEasterBanner />
      <TouchableOpacity 
        style={styles.cluckButton}
        onPress={playCluckSound}
      >
        <Text style={styles.buttonText}>Cluck here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6347',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'rgba(255,255,255,0.5)',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#333333',
  },
  cluckButton: {
    width: 200,
    height: 50,
    backgroundColor: '#006400', // Green color
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Index;

