import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from './Icon';

const iconData = [
    { src: require('../../assets/phone.svg') },
    { src: require('../../assets/videocall.svg') },
]

const Menu = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title} > Rooms </Text>

            <View style={styles.iconContainer}>
                {iconData.map(({ src }, index) => {
                    return <Icon src={src} key={index} />
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#B6DEFD',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-betwen',
        alignItems: 'space-betwen',
        height: 81,
        width: '100vw',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
    },

    title: {

    },

    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Menu
