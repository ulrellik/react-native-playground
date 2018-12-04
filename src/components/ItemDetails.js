import React from 'react';
import { StyleSheet, Image, Text, Modal, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default (props) => {
  return (
    <Modal
      visible={props.item !== null}
      onRequestClose={props.onClose}
    >
      {props.item && (
        <View style={styles.container}>
          <Image style={styles.image} source={props.item.image} />
          <Text style={styles.text}>{props.item.value}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.container} onPress={props.onDelete}>
        <Icon size={30} name="delete" color="red" />
      </TouchableOpacity>
      <Button title="Close" onPress={props.onClose} />
    </Modal>
  );
}
