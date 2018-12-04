import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { deletePlace } from '../store/actions';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export const ItemDetailsScreen = (props) => {
  const onDelete = () => {
    props.onDelete(props.item.key);
    Navigation.pop(props.componentId);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.item.image} />
      <Text style={styles.text}>{props.item.value}</Text>
      <TouchableOpacity style={styles.container} onPress={onDelete}>
        <Icon size={30} name="delete" color="red" />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  onDelete: key => dispatch(deletePlace(key)),
});

export default connect(null, mapDispatchToProps)(ItemDetailsScreen);
