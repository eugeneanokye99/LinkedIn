import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Link } from "expo-router"; 
  import {User} from '@/types'  

type UserListItemProps ={
    user: User;
}

export default function UserListItem({user}: UserListItemProps) {
  return (
        <Link href={`/users/${user.id}`} asChild>
        <Pressable style={styles.header}>
          <Image
            source={{ uri: user.image }}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <Text>{user.position}</Text>
          </View>
        </Pressable>
      </Link>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      },
      userName: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5,
      },
      userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
})