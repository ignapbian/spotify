import React, { Component, useEffect, useState } from 'react'
import { View,Text } from '../components/Themed'
import { useRoute } from '@react-navigation/native'
import albumDetails from '../data/albumDetails'
import SongListItem from '../components/SongListItem'
import { FlatList } from 'react-native-gesture-handler'
import AlbumHeader from '../components/albumHeader'
import {API, graphqlOperation} from 'aws-amplify'
import {getAlbum} from '../src/graphql/queries'

const albumScreen = ( ) => {
    const route = useRoute();
    const albumID = route.params.id;
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        const fetchAlbumDetails = async()=>{
            try {
                const data = await API.graphql(graphqlOperation(getAlbum,{id:albumID}));
                setAlbum(data.data.getAlbum)
            } catch (error) {
                console.log(error)
            }
        }
       fetchAlbumDetails();
    }, [])

    if(!album){
        return <Text>Loading...</Text>
    }
   return (
    <View>
        <FlatList 
            data={album.songs.items}
            renderItem={({item}) => <SongListItem song={item}/>}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <AlbumHeader album={album}/>}
        />
    </View>
   )     
    
    
}
    

export default albumScreen
