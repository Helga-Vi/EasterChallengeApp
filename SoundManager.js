import { useState, useEffect } from 'react';
import * as Audio from 'expo-av';

const SoundManager = () => {
const [sound, setSound] = useState(null);

export const playSound = async () => {
  console.log('Loading sound');
  
  if (!sound) {
    try {
    sound = await Audio.Sound.createAsync(
      require('./assets/sounds/047876_chicken-clucking-6861.mp3')
    );
  setSound(sound);
  } catch (error) {
    console.error('Error loading sound:', error);
  }
}

  console.log('Playing Sound');
  try {
    await sound.playAsync(); 
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};  

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
           sound.unloadAsync().then(() => {
            setSound(null);
           });
        }
      : undefined;
  }, [sound]);

  return playSound;
};

export default SoundManager



