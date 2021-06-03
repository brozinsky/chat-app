import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Icon = ({ src }) => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={src}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    image: {
        height: 44,
        width: 44,
    },
});

export default Icon