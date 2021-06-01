import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Rooms from './components/Rooms/Rooms'

export default function App() {
  return (
    <View style={styles.body}>
      <Rooms />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F0F8FF',

  },
});
