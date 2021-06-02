import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Chat from '../Chat/Chat'

const ChatScreen = ({ route, navigation }) => {
    const { itemId } = route.params

    return (
        <Text>{itemId}</Text>
        // <Chat itemId={itemId}/>
    );
}

export default ChatScreen
