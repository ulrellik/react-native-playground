import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

const DEFAULT_ICON_BUTTON_PROPS = { color: 'black', backgroundColor: 'white', borderRadius: 0, size: 50 };

export default class SideMenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="exit-to-app" onPress={() => alert('logout')} {...DEFAULT_ICON_BUTTON_PROPS}>
          Logout
        </Icon.Button>
      </View>
    );
  }
}
