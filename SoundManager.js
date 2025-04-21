import * as Audio from 'expo-av';


async function playSound() {
  console.log('Loading sound');
  
  const { sound } = await Audio.Sound.createAsync(
      require('./assets/sounds/047876_chicken-clucking-68610.mp3')
    );

    console.log('Playing Sound');
    await sound.playAsync();

    return () => {
      if (sound) {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    };
  }
  
export default playSound;



