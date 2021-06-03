import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const Item = ({ title, isActive, roomPic, navigation, itemId }) => {
    const handlePress = () => {
        navigation.navigate('Chat', { itemId: itemId })
    }

    return (
        <TouchableHighlight
            onPress={handlePress}>
            <View
                style={isActive ? styles.containerActive : styles.container}>
                <Image
                    style={styles.avatarProfile}
                    source={roomPic ? roomPic : require('../../assets/profile.svg')}
                />
                <View style={isActive ? styles.messagesWrapActive : styles.messagesWrap}>
                    <Text style={isActive ? styles.titleActive : styles.title}>{title}</Text>
                    <Text style={isActive ? styles.messageActive : styles.message}>{itemId}</Text>
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
    containerActive: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100vw',
        backgroundColor: '#5603AD',

        borderWidth: 1,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 12,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,
        borderColor: 'transparent'
    },

    messagesWrapActive: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '12px',
    },

    titleActive: {
        fontSize: 15,
        color: '#fff'
    },

    messageActive: {
        color: '#fff',
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100vw',
        backgroundColor: '#fff',
        borderColor: 'transparent',

        borderWidth: 1,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 12,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,

    },

    messagesWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '12px',
    },

    title: {
        fontSize: 15,
        color: '#000'
    },

    message: {
        color: '#000',
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