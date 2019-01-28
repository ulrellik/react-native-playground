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

export default function Map(props) {
  return (
    <React.Fragment>
      <View style={styles.placeholder}>
        <Text>[Map]</Text>
      </View>
      <Button title="Locate Me" onPress={() => alert('pick location')} />
    </React.Fragment>
  );
}
