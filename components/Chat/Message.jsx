import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Message = ({ message, user }) => {
    return (
        <View >
            <View style={styles.whiteSpace} />
            <Text style={user.firstName === "Sauron"
                ? styles.user
                : styles.other}>
                {message}
            </Text >
        </View>
    )
}

const styles = StyleSheet.create({
    whiteSpace: {
        height: 16
    },
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
