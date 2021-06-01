import React from 'react'
import Item from './Item'
import { StyleSheet, Text, View } from 'react-native';

const roomsList = [
    { title: 'The one with Harry', text: 'Hey Harry, how you doing?', isActive: true, postedTime: '' },
    { title: 'The one with Ron', text: 'Ron sent a photo.', isActive: false, postedTime: '24m ago' },
    { title: 'The one with Remus', text: 'My parents tried everything, but in...', isActive: false, postedTime: '2h ago' }

]

const Rooms = () => {
    return (
        <View style={styles.wrapper}>
            {roomsList.map(({ title, text, isActive, postedTime }) => {
                return <Item title={title} text={text} isActive={isActive} postedTime={postedTime} />
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
