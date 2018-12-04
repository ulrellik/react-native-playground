import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';

import { name as appName } from '../../app.json';
import List from '../components/List';


export class FindPlaceScreen extends React.Component {
  showItem = (key) => {
    const foundPlace = this.props.places.find(place => place.key === key);

    Navigation.push(this.props.componentId, {
      component: {
        name: `${appName}.ItemDetailsScreen`,
        passProps: {
          item: foundPlace,
          onDelete: () => alert('click'),
        },
        options: {
          topBar: {
            title: {
              text: foundPlace.value,
            },
          },
        },
      },
    });
  }

  render() {
    return (
      <View>
        <List list={this.props.places} onPressItem={this.showItem} />
      </View>
    );
  }
}

const mapStateToProps = state => ({ places: state.places.places });

export default connect(mapStateToProps)(FindPlaceScreen);
