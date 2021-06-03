import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const Item = ({ title, roomPic, navigation, itemId }) => {
    const handlePress = () => {
        navigation.navigate('Chat', { itemId: itemId })
    }

    return (
        <TouchableHighlight
            onPress={handlePress}>
            <View style={styles.container}>
                <Image
                    style={styles.avatarProfile}
                    source={roomPic
                        ? roomPic
                        : require('../../assets/profile.svg')}
                />
                <View style={styles.messagesWrap}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    avatarProfile: {
        height: 64,
        width: 64,
        borderRadius: 50
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100vw',
        backgroundColor: '#fff',
        borderColor: 'transparent',
        borderWidth: 1,
        padding: 16,
        marginTop: 12,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,
    },

    messagesWrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '12px',
        maxWidth: '70%',
    },

    title: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'normal',
    },

    isActive: {
        height: 64,
        width: 64,
        backgroundColor: '#0f0',

    },
    isNotActive: {
        height: 64,
        width: 64,
        backgroundColor: '#00f',
    },
    postedTime: {
        fontSize: 10
    }
});

export default Item