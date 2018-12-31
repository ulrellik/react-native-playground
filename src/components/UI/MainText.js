import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'cursive',
  },
});

export default function MainText(props) {
  return (
    <Text
      {...props}
      style={[styles.text, props.style]}
    >
      {props.children}
    </Text>
  );
}
