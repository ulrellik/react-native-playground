import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgrey',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 3,
  },
});

export default ({ text, image, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image style={styles.image} source={image} />
    <Text>{text}</Text>
  </TouchableOpacity>
);
