import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';
import List from './src/components/List';
import Input from './src/components/Input';
import ItemDetails from './src/components/ItemDetails';
import image from './src/assets/img_0420.jpg';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ItemDetails
          item={this.props.selectedPlace}
          onDelete={this.props.onDeletePlace}
          onClose={this.props.onDeselectPlace}
        />
        <Input
          onPress={this.props.onAddPlace}
        />
        <List
          list={this.props.places}
          onPressItem={this.props.onSelectPlace}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace,
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: place => dispatch(addPlace(place)),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: key => dispatch(selectPlace(key)),
  onDeselectPlace: () => dispatch(deselectPlace()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
