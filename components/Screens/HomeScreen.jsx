import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ROOMS } from '../../queries/getRooms'
import { StyleSheet, View } from 'react-native';
import Rooms from '../Rooms/Rooms'
import Menu from '../Menu/Menu'

const homeIcons = [
    { src: require('../../assets/search.svg') },
    { src: require('../../assets/rooms.svg') },
]

const HomeScreen = ({ navigation }) => {
    const { data: dataRooms, loading: loadingRooms } = useQuery(GET_ROOMS);
    const [rooms, setRooms] = React.useState(undefined);

    React.useEffect(() => {
        if (!loadingRooms && dataRooms) {
            setRooms(dataRooms.usersRooms.rooms);
        }
    }, [loadingRooms, dataRooms])

    return (
        <View style={styles.body}>
            <Menu icons={homeIcons} />
            <Rooms navigation={navigation} rooms={rooms} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        fontFamily: 'Poppins'
    },
});

export default HomeScreen
