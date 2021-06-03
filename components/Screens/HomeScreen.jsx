import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ROOMS } from '../../queries/getRooms'
import Rooms from '../Rooms/Rooms'

const HomeScreen = ({ navigation }) => {
    const { data: dataRooms, loading: loadingRooms } = useQuery(GET_ROOMS);
    const [rooms, setRooms] = React.useState(undefined);

    React.useEffect(() => {
        if (!loadingRooms && dataRooms) {
            setRooms(dataRooms.usersRooms.rooms);
        }
    }, [loadingRooms, dataRooms])

    return (
        <Rooms navigation={navigation} rooms={rooms} />
    );
}

export default HomeScreen
