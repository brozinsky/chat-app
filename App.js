import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { client } from './apollo'
import { StyleSheet, View, } from 'react-native'
import { ApolloProvider } from '@apollo/client/react';

import HomeScreen from './components/Screens/HomeScreen'
import ChatScreen from './components/Screens/ChatScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.body}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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
