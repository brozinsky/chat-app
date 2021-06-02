import React from 'react'
import Item from './Item'
import { StyleSheet, Text, View, } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_ROOMS } from '../../queries/getRooms'
import { GET_MESSAGES } from '../../queries/getMessages'

// const roomsList = [
//     { title: 'The one with Harry', text: 'Hey Harry, how you doing?', isActive: true, postedTime: '' },
//     { title: 'The one with Ron', text: 'Ron sent a photo.', isActive: false, postedTime: '24m ago' },
//     { title: 'The one with Remus', text: 'My parents tried everything, but in...', isActive: false, postedTime: '2h ago' }
// ]

const Rooms = ({ navigation }) => {
    const { data: dataRooms, loading: loadingRooms } = useQuery(GET_ROOMS);

    const { loading, error, data } = useQuery(GET_MESSAGES, {
        variables: {
            id: 'd602a8c0-b093-424d-9393-23c620147a89'
        },
    });

    const [rooms, setRooms] = React.useState(undefined);
    const [roomsId, setRoomsId] = React.useState(undefined);
    const [msgData, setMsgData] = React.useState(undefined);

    const idddd = ['d602a8c0-b093-424d-9393-23c620147a89',
        '704da3c0-88ef-470a-9bd3-6a2714c43c1f',
        'd602a8c0-b093-424d-9393-23c620147a89']

    React.useEffect(() => {
        if (!loadingRooms && dataRooms) {
            setRooms(dataRooms.usersRooms.rooms);
        }
    }, [loadingRooms, dataRooms])

    React.useEffect(() => {
        if (rooms) {
            let temp = rooms.map((room) => {
                return room.id
            })
            setRoomsId(temp)
        }
    }, [rooms])


    React.useEffect(() => {
        if (!loading && data) {
            setMsgData(data);
        }
    }, [loading, data])

    if (data) {
        console.log(data.room.messages)
    }



    // React.useEffect(() => {
    //     if (error) return `Error! ${error}`;
    //     if (!loading) { console.log(msgData) }


    //     if (!loading && data) {
    //         setMsgData(data);
    //     }
    // }, [loading, data])

    return (
        <View style={styles.wrapper}>
            {rooms ? rooms.map(({ name, roomPic, id }, index) => {
                return <Item navigation={navigation} title={name} roomPic={roomPic} text={'asdasdfaf'} isActive={false} postedTime={''} key={index} itemId={id} />
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