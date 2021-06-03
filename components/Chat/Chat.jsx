import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Message from './Message'
import Panel from './Panel'
import Menu from '../Menu/Menu'

const Chat = ({ messages, itemId }) => {

    return (
        <View style={styles.wrapper}>
            <Menu />
            <View style={styles.chatArea}>
                {messages ? messages.map(({ body, user }, index) => {
                    return <Message user={user} message={body} key={index} />
                }) : <Text>...</Text>}

            </View>
            <Panel itemId={itemId} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        height: '100vh',
        maxHeight: '100vh',
    },

    chatArea: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flexGrow: 1,
        margin: 16
    },

});

export default Chat
