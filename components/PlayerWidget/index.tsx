import React, { useEffect, useState, useContext } from 'react'
import { View,Image,Text} from 'react-native'
import styles from './styles'
import {AntDesign, FontAwesome} from "@expo/vector-icons"
import {Audio} from "expo-av"
import { Sound } from 'expo-av/build/Audio'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {AppContext} from '../../AppContext'
import { API, graphqlOperation } from 'aws-amplify'
import { getSong } from '../../src/graphql/queries'


const PlayerWidget =() => {
    const [song, setSong ]= useState(null);
    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPLaying] = useState<boolean>(true)
    const [duration, setduration] = useState<number|null>(null);
    const [position, setposition] = useState<number|null>(null);

    const {songId} = useContext(AppContext);

    useEffect(() => {
        const fetchSong = async () =>{
            try {
                const data = await API.graphql(graphqlOperation(getSong,{id:songId}))
                setSong(data.data.getSong);
            } catch (error) {
                console.log(error)
            }
        }
        fetchSong();
    }, [songId])

    const onPLaybackStatusUpdate = (status: any)=>{
        setIsPLaying(status.isPlaying);
        setduration(status.durationMillis);
        setposition(status.positionMillis);
    }

    const playCurrentSong = async ()=>{
        if(sound){
            await sound.unloadAsync();
        }
        const {sound:newSound} = await Audio.Sound.createAsync(
            {uri:song.uri},
            {shouldPlay:isPlaying},
            onPLaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        if(song){
            playCurrentSong();
        }
        
    }, [song])
    
    const onPLayPausePress = async()=>{
        if(!sound){
            return;
        }
        if(isPlaying){
            await sound.stopAsync();
        }else{
            await sound.playAsync();
        }
    }

    const getProgress = ()=>{
        if(sound == null || duration === null || position == null){
            return 0;
        }
        return (position/duration)*100;
    }
    if(!song){
        return null;
    }
        return (
            <View style={styles.container}>
                <View style={[styles.progress, {width:`${getProgress()}%`}]}/>
                <View style={styles.row}>
                    <Image source={{uri:song.imageUri}} style={styles.image} />
                    <View style={styles.rightContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.title} >{song.title}</Text>
                            <Text style={styles.artist} >{song.artist}</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <AntDesign name={"hearto"} size={30} color={"white"}/>
                            <TouchableOpacity onPress={onPLayPausePress}>
                                <FontAwesome name={isPlaying?'pause':'play'} size={30} color={"white"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
}
export default PlayerWidget;