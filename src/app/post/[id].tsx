import { View, Text } from 'react-native'
import React from 'react'
import posts from '../../../LinkedIn Asset Bundle/data/posts.json'
import { ScrollView } from 'react-native-gesture-handler'
import PostListItem from '@/components/PostListItem'
import { useLocalSearchParams } from 'expo-router'


export default function PostDetailsScreen() {
    const { id } = useLocalSearchParams();

    const post = posts.find(post => post.id ===id)

    if(!post){
     return <Text>Post not found</Text>
    }


  return (
    <ScrollView>
      <PostListItem post={post}/>
    </ScrollView>
  )
}