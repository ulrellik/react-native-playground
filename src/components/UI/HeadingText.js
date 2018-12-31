import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 64,
  },
});

export default function HeadingText(props) {
  return (
    <Text
      {...props}
      style={[styles.text, props.style]}
    >
      {props.children}
    </Text>
  );
}
