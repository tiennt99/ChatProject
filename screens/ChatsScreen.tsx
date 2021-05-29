import React from 'react';
import {FlatList, StyleSheet,View} from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import ChatRoom from '../data/ChatRooms'
export default function ChatsScreen (){
    return(
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={ChatRoom}
                renderItem={({item}) => (<ChatListItem chatRoom={item}/>)}
                keyExtractor={(item) => item.id}
            />
            <NewMessageButton />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})