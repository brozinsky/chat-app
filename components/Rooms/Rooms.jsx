import React from 'react'
import Item from './Item'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../../queries/getRooms';

// const roomsList = [
//     { title: 'The one with Harry', text: 'Hey Harry, how you doing?', isActive: true, postedTime: '' },
//     { title: 'The one with Ron', text: 'Ron sent a photo.', isActive: false, postedTime: '24m ago' },
//     { title: 'The one with Remus', text: 'My parents tried everything, but in...', isActive: false, postedTime: '2h ago' }
// ]

const Rooms = () => {
    const { data, loading } = useQuery(GET_ROOMS);
    const [rooms, setRooms] = React.useState(undefined);

    React.useEffect(() => {
        if (!loading && data) {
            setRooms(data.usersRooms.rooms);
        }
    }, [loading, data])

    return (
        <View style={styles.wrapper}>
            {rooms ? rooms.map(({ name, roomPic }, index) => {
                return <Item title={name} roomPic={roomPic} text={'asdasdfaf'} isActive={false} postedTime={''} key={index} />
            }) : null}
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