import React from 'react'
import Item from './Item'
import { StyleSheet, View, } from 'react-native'

const Rooms = ({ navigation, rooms }) => {
    return (
        <View style={styles.wrapper}>
            {rooms ? rooms.map(({ name, roomPic, id }, index) => {
                return <Item
                    navigation={navigation}
                    title={name}
                    roomPic={roomPic}
                    key={index}
                    itemId={id} />
            }) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: '100vw',
    },
});

export default Rooms