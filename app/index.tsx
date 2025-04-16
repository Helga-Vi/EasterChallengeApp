import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import {Audio} from 'expo-av';
import HappyEasterBanner from '@/components/HappyEasterBanner';
import ImagePanel from '@/components/imagePanel';


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

