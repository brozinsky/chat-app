import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const Panel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input}> </View>

            <Image
                style={styles.image}
                source={require('../../assets/send.svg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100vw',
        backgroundColor: '#B6DEFD',
        height: 68,
        padding: 16,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        borderColor: 'transparent',
        height: 41,
        flexGrow: 1
    },

    image: {
        height: 44,
        width: 44,
        marginLeft: 16
    },
});

export default Panel
