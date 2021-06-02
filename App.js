import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { client } from './apollo'

import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from '@apollo/client/react';

import Menu from './components/Menu/Menu'
import Rooms from './components/Rooms/Rooms'
import Chat from './components/Chat/Chat'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.body}>
        <Rooms />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F0F8FF',

  },
});
