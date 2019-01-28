import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet } from 'react-native';

import { addPlace } from '../store/actions';
import Input from '../components/Input';
import PickImage from '../components/PickImage';
import Map from '../components/Map';

const styles = StyleSheet.create({
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
          <PickImage />
          <Map />
          <Input onPress={this.props.onAddPlace} />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({ onAddPlace: place => dispatch(addPlace(place)) });

export default connect(undefined, mapDispatchToProps)(SharePlaceScreen);
