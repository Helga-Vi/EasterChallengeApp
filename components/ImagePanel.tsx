// ImagePanel.tsx

import React, {useState} from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ImagePanel = () => {

  return (
    <View style={styles.imageContainer}>
      <Image source={require('../assets/images/FREE-Daffodils-Clipart-.png')} style={[styles.image, styles.daffodil]} />
      <Image source={require('../assets/images/chicken.png')} style={[styles.image, styles.chicken]} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 75,
    paddingBottom: 75,
  },
  image: {
    width: '48%',
    height: 'auto',
    resizeMode: 'contain',
  },
  daffodil: {
    paddingTop: 240,
    marginLeft: 50,
  },
  chicken: {
    marginRight: 50,
  }

});

export default ImagePanel;