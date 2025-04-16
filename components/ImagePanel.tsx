// ImagePanel.tsx

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagePanel = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={require('../assets/images/FREE-Daffodils-Clipart-.png')} style={styles.image} />
      <Image source={require('../assets/images/chicken.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain',
  },
});

export default ImagePanel;