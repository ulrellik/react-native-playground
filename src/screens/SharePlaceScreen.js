import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

import { addPlace } from '../store/actions';
import Input from '../components/Input';

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export class SharePlaceScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.placeholder}><Text>[Image]</Text></View>
          <Button title="Pick Image" onPress={this.props.onAddPlace} />
          <View style={styles.placeholder}><Text>[Map]</Text></View>
          <Button title="Locate Me" onPress={this.props.onAddPlace} />
          <Input onPress={this.props.onAddPlace} />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({ onAddPlace: place => dispatch(addPlace(place)) });

export default connect(undefined, mapDispatchToProps)(SharePlaceScreen);
