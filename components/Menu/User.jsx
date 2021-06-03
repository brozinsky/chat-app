import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';

const User = ({ src, name, lastName, role }) => {

    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.image}
                source={{
                    uri: src,
                }} />
            <View style={styles.nameWrap}>
                <Text style={styles.title}>{name} {lastName}</Text>
                <Text style={styles.subtitle}>{role}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    nameWrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    },

    image: {
        height: 44,
        width: 44,
        padding: 16
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5603AD',
    },

    subtitle: {
        fontSize: 14,
        fontWeight: 'medium',
        color: '#fff',
        textTransform: 'capitalize'
    }

});

export default User
