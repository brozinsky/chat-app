import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Message from './Message'
import Panel from './Panel'
import { useSubscription } from '@apollo/client'
import { MESSAGE_ADDED } from '../../queries/messageAdded'

const Chat = ({ messages, itemId }) => {
    const [newMessage, setNewMessage] = React.useState(undefined);

    const { data, loading } = useSubscription(MESSAGE_ADDED,
        {
            variables: {
                roomId: itemId
            }
        }
    );

    React.useEffect(() => {
        if (!loading && data) {
            setNewMessage(data.messageAdded.body);
        }
    }, [loading, data])

    return (
        <View style={styles.wrapper}>
            <View style={styles.chatArea}>
                {messages ? messages.map(({ body, user }, index) => {
                    return <Message user={user} message={body} key={index} />
                }) : <Text>...</Text>}
                {data ?
                    <Message user={newMessage.user} message={newMessage} />
                    : null}
            </View>
            <Panel itemId={itemId} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },
    chatArea: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flexGrow: 1,
        margin: 16,
    },

});

export default Chat
