import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Item = ({ title, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.messagesWrap}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5603AD',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    messagesWrap: {
        padding: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: '#fff'
    },
    message: {
        color: '#fff'
    },
});

export default Item