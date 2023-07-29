import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import users from '../../LinkedIn Asset Bundle/data/users.json'
import UserListItem from '@/components/UserListItem'
import { useNavigation } from 'expo-router'

export default function search() {
    const [search, setSearch] = useState('')
    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerSearchBarOptions: {
       placeholder: 'Search Users',
       onChangeText: setSearch
        },
      })
    }, [navigation])
  return (
    <View>
      <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})