import React from 'react'
import { StyleSheet, TextInput, View, Image, TouchableHighlight } from 'react-native'
import { useMutation } from '@apollo/client'
import { SEND_MESSAGE } from '../../queries/sendMessage'

const Panel = ({ itemId }) => {
    const [text, onChangeText] = React.useState("");
    const [sendMsg, { data }] = useMutation(SEND_MESSAGE);

    const roomId = itemId.itemId

    const handleSend = () => {
        if (text != "") {
            sendMsg({
                variables: {
                    body: text,
                    roomId: roomId
                }
            });
            onChangeText("")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TouchableHighlight onPress={handleSend}>
                <Image
                    style={styles.image}
                    source={require('../../assets/send.svg')}
                />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100vw',
        backgroundColor: '#B6DEFD',
        height: 68,
        padding: 16,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        borderColor: 'transparent',
        height: 41,
        flexGrow: 1,
        padding: 10
    },

    image: {
        height: 44,
        width: 44,
        marginLeft: 16
    },
});

export default Panel
