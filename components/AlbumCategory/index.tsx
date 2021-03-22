import React from 'react'
import { View,Text } from '../Themed'
import {album} from '../../types'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import Album from '../Album'

export type AlbumCategoryProps={
    title:string,
    albums:[album]
}

const AlbumCategory = (props:AlbumCategoryProps) => (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                data={props.albums}
                renderItem={({item}) => <Album album={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
)

export default AlbumCategory
