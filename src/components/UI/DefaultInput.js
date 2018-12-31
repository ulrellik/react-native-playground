import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '100%',
    margin: 3,
    padding: 5,
  },
});

export default function DefaultInput(props) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
    />
  );
}
