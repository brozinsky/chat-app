import React from 'react'
import Item from './Item'
import { StyleSheet, Text, View } from 'react-native';

const roomsList = [
    { title: 'The one with Harry', text: 'Hey Harry, how you doing?' },
    { title: 'The one with Ron', text: 'Ron sent a photo.' },
    { title: 'The one with Remus', text: 'My parents tried everything, but in...' }

]

const Rooms = () => {
    return (
        <View style={styles.wrapper}>
            <Item />
            {roomsList.map(({ title, text }) => {
                return <Item title={title} text={text} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Rooms
