import React from 'react';
import { View, Text, Button } from 'react-native';

import { changeToTabs } from '../../App';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Seems to work</Text>
        <Button title="Login" onPress={changeToTabs} />
      </View>
    );
  }
}
