import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { addPlace } from '../store/actions';
import Input from '../components/Input';

export class SharePlaceScreen extends React.Component {
  render() {
    return (
      <View>
        <Input onPress={this.props.onAddPlace} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({ onAddPlace: place => dispatch(addPlace(place)) });

export default connect(undefined, mapDispatchToProps)(SharePlaceScreen);
