import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    width: '100%',
  },
});

export default function PickImage(props) {
  return (
    <React.Fragment>
      <View style={styles.placeholder}>
        <Text>[Image]</Text>
      </View>
      <Button title="Pick Image" onPress={() => alert('pick image')} />
    </React.Fragment>
  );
}
