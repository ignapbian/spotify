import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory'
import AlbumCategories from '../data/AlbumCategories'
import { FlatList } from 'react-native-gesture-handler';
import {API, graphqlOperation} from 'aws-amplify'
import {listAlbumCategorys} from '../src/graphql/queries'
import { useEffect, useState } from 'react';

export default function TabOneScreen() {

  const [categories, setCategories] = useState([])

  const fetchAlbumCategories = async ()=>{
    try {
      const data = await API.graphql(graphqlOperation(listAlbumCategorys));
      setCategories(data.data.listAlbumCategorys.items);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAlbumCategories();
  },[])
  return (
    <View>
      <FlatList 
        data={categories}
        renderItem={({item}) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums.items}
          />
         )}
         keyExtractor={(item) => item.id}
      />
    </View>
  );
}

