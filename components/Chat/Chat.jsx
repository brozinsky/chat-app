import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Message from './Message'
import Panel from './Panel'
import Menu from '../Menu/Menu'

const messageData = [
    {
        isUser: false,
        message: `It would be quite nice if you stopped jumping down out throats, Harry, because in case you haven't noticed, Ron and I are on your side!`
    },
    {
        isUser: true,
        message: `Chill out gurl. I’m cool`
    },
    {
        isUser: true,
        message: `Let us step into the night and pursue that flighty temptress, adventure`
    }
]

const Chat = () => {
    return (
        <View style={styles.wrapper}>
            <Menu />
            <View style={styles.chatArea}>
                {messageData.map(({ message, isUser }, index) => {
                    return <Message isUser={isUser} message={message} key={index} />
                })}
            </View>
            <Panel />
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
