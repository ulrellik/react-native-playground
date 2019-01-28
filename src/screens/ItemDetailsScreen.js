import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { deletePlace } from '../store/actions';

const styles = StyleSheet.create({
  portraitImage: {
    width: '100%',
    height: '50%',
  },
  landscapeImage: {
    height: '100%',
    width: '50%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  portraitContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export class ItemDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    const currentDims = Dimensions.get('window');
    this.state = {
      orientation: currentDims.height > currentDims.width ? 'portrait' : 'landscape',
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.changeOrientation);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.changeOrientation);
  }

  onDelete = () => {
    this.props.onDelete(this.props.item.key);
    Navigation.pop(this.props.componentId);
  };

  changeOrientation = ({ window: { width, height } }) => {
    this.setState({ orientation: height > width ? 'portrait' : 'landscape' });
  }

  render() {
    return (
      <View style={styles[`${this.state.orientation}Container`]}>
        <Image style={styles[`${this.state.orientation}Image`]} source={this.props.item.image} />
        <View style={styles.portraitContainer}>
          <Text style={styles.text}>{this.props.item.value}</Text>
          <TouchableOpacity style={styles.portraitContainer} onPress={this.onDelete}>
            <Icon size={30} name="delete" color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDelete: key => dispatch(deletePlace(key)),
});

export default connect(null, mapDispatchToProps)(ItemDetailsScreen);
