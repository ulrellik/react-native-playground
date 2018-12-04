import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default ({ list, onPressItem }) => (
  <FlatList
    style={styles.container}
    data={list}
    renderItem={({ item }) => (
      <ListItem text={item.value} image={item.image} onPress={() => onPressItem(item.key)} />
    )}
  />
);
