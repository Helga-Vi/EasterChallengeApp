import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import HappyEasterBanner from '@/components/HappyEasterBanner';
import ImagePanel from '@/components/ImagePanel';

const Index = () => {

  const [sound, setSound] = useState();

  async function playSound() {

    console.log('Loading sound');
    
    const { sound } = await Audio.Sound.createAsync(
        require('./assets/sounds/047876_chicken-clucking-68610.mp3')
      );
      setSound(sound)
      console.log('Playing Sound');
      await sound.playAsync();
  }

      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
         
  return (
    <View style={styles.container}>
      <HappyEasterBanner />
      <ImagePanel />
      <TouchableOpacity 
        style={styles.cluckButton} 
        onPress={playSound}
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
  cluckButton: {
    width: 200,
    height: 50,
    backgroundColor: '#006400', // Green color
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Index;

