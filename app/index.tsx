import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import {Audio} from 'expo-av';
import ImagePanel from '@/components/imagePanel';

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

const Index = () => {
  //const playCluckSound = async () => {
    //try {
      //await Audio.setCategoryAsync('Playback');
    
      //const { sound, error } = await Audio.Sound.createAsync(
        //require('./sounds/cluck.mp3')
      //);
  
      //if (error) {
        //console.log('Failed to load sound', error);
        //return;
      //}
  
      //await sound.playAsync();
      //await sound.setVolumeAsync(1.0);
  
    //} catch (error) {
      //console.error("Error playing sound", error);
    //}
  //};

  return (
    <View style={styles.container}>
      <HappyEasterBanner />
      <ImagePanel />
      <TouchableOpacity 
        style={styles.cluckButton}
        
      >
        <Text style={styles.buttonText}>Cluck here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    paddingVertical: 50,
  },
  textContainer: {
    opacity: 0,
    transitionProperty: 'opacity',
    transitionDuration: '500ms',
    marginBottom: 50, 
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6347',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'rgba(255,255,255,0.5)',
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

