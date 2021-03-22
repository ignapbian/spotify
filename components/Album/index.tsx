import React, { Component } from 'react'
import { View,Image,Text,TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import {album} from '../../types'
import { useNavigation } from '@react-navigation/native'

export type AlbumProps = {
    album:album
    
}
const Album = (props:AlbumProps) => {
    const navigation = useNavigation();
    const onPress =()=>{
        navigation.navigate('AlbumScreen',{id:props.album.id})
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
                {/** image of the album */}
                <Image source={{uri:props.album.imageUri}} style={styles.image} />
                {/** artist headline */}
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
        </View>
         </TouchableWithoutFeedback>
    )
}
export default Album;