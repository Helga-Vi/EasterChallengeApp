import * as Audio from 'expo-av';

let sound;

export const playSound = async () => {
  console.log('Playing sound');
  
  if (!sound) {
    sound = await Audio.Sound.createAsync(
      { uri: 'asset:/sounds/047876_chicken-clucking-68610' },
      { shouldPlay: true }
    );
  }

  try {
    await sound.playAsync();
  } catch (error) {
    console.error('Failed to play sound:', error);
  }
};