import React from 'react'
import Chat from '../Chat/Chat'
import { useQuery } from '@apollo/client'
import { GET_MESSAGES } from '../../queries/getMessages'

const ChatScreen = ({ route, navigation }) => {
    const { itemId } = route.params
    const [messages, setMessages] = React.useState(undefined);

    const { loading, data } = useQuery(GET_MESSAGES, {
        variables: {
            id: itemId
        },
    });

    React.useEffect(() => {
        if (!loading && data) {
            setMessages(data.room.messages);
        }
    }, [loading, data])

    // if (data) {
    //     console.log(messages)
    // }

    return (
        <Chat itemId={route.params} messages={messages} />
    );
}

export default ChatScreen