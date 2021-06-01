import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const Message = ({ message, isUser }) => {
    return (
        <Text style={isUser ? styles.user : styles.other}>
            {message}
        </Text>
    )
}

const styles = StyleSheet.create({
    user: {
        backgroundColor: '#993AFC',
        borderWidth: 1,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        borderColor: 'transparent',
        flexGrow: 0,
        padding: 16,
        width: '65%',
        alignSelf: 'flex-end',
        height: 'auto',
        color: '#fff'
    },

    other: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        borderColor: 'transparent',
        flexGrow: 0,
        padding: 16,
        width: '65%',
        height: 'auto'
    },
});

export default Message
