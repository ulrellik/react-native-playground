import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
  },
});

type Props = {};
export default class Input extends Component<Props> {
  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type in here"
          value={this.state.text}
          onChangeText={val => this.setState({ text: val })}
        />
        <Button title="Add" onPress={() => this.props.onPress(this.state.text)} />
      </View>
    );
  }
}
