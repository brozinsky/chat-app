import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene } from "react-native-router-flux"

import Menu from './components/Menu/Menu'
import Rooms from './components/Rooms/Rooms'
import Chat from './components/Chat/Chat'


export default function App() {
  return (
    <View style={styles.body}>
      <Chat />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F0F8FF',

  },
});
