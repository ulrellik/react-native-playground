import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import background from '../assets/background.jpg';

import { changeToTabs } from '../navigation';
import DefaultInput from '../components/UI/DefaultInput';
import HeadingText from '../components/UI/HeadingText';
import MainText from '../components/UI/MainText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    width: '80%',
  },
  input: {
    borderColor: 'black',
    backgroundColor: 'whitesmoke',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

export default class AuthScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <MainText style={{ color: 'white' }}><HeadingText>Signup</HeadingText></MainText>
          <Button title="Change to Login" onPress={changeToTabs} />
          <View style={styles.containerInput}>
            <DefaultInput placeholder="Email" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <Button title="Submit" onPress={changeToTabs} />
        </View>
      </ImageBackground>
    );
  }
}
