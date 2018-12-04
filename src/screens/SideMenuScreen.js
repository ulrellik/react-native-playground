import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default class SideMenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a test</Text>
      </View>
    );
  }
}
