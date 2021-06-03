import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from './Icon'
import User from './User'

const Menu = ({ icons, user }) => {
    return (
        <View style={styles.wrapper}>
            {user
                ? <User name={user.firstName}
                    lastName={user.lastName}
                    role={user.role}
                    src={user.profilePic} />
                : <Text style={styles.title} >
                    Rooms
                </Text>}
            <View style={styles.iconContainer}>
                {icons.map(({ src }, index) => {
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
        justifyContent: 'space-between',
        height: 81,
        width: '100vw',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        padding: 16
    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#5603AD',
    },

    userTitle: {
        fontSize: 16,
        fontWeight: 'semi-bold',
        fontFamily: 'Poppins-Bold',
        color: '#5603AD',
    },

    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 96

    },
});

export default Menu
