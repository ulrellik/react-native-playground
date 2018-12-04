import React from 'react';
import { StyleSheet, Image, Text, Modal, View, Button } from 'react-native';

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
      <Button title="Delete" color="red" onPress={props.onDelete} />
      <Button title="Close" onPress={props.onClose} />
    </Modal>
  );
}
