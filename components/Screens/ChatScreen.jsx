import React from 'react'
import Chat from '../Chat/Chat'
import { useQuery } from '@apollo/client'
import { GET_MESSAGES } from '../../queries/getMessages'
import { StyleSheet, View } from 'react-native';
import Menu from '../Menu/Menu'

const chatIcons = [
    { src: require('../../assets/phone.svg') },
    { src: require('../../assets/videocall.svg') },
]

const ChatScreen = ({ route, navigation }) => {
    const { itemId } = route.params
    const [messages, setMessages] = React.useState(undefined);
    const [user, setUser] = React.useState(undefined);

    const { loading, data } = useQuery(GET_MESSAGES, {
        variables: {
            id: itemId
        },
    });

    React.useEffect(() => {
        if (!loading && data) {
            setMessages(data.room.messages);
            setUser(data.room.messages[0].user);
        }
    }, [loading, data])

    return (
        <View style={styles.body}>
            <Menu icons={chatIcons} user={user} />
            <Chat itemId={route.params} messages={messages} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Poppins',
        height: '100vh',
        maxHeight: '100vh'
    },
});

export default ChatScreen