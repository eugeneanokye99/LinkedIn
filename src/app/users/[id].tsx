import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import userJson from "../../../LinkedIn Asset Bundle/data/user.json";
import { User } from "@/types";

export default function UserProfile() {
  const [user, setUser] = useState<User>(userJson);

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const onConnect = () => {
    console.warn("Connect pressed");
  };

useLayoutEffect(() => {
    navigation.setOptions({
        title: user.name
      })
}, [user?.name])

  

  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={styles.header}>
        {/* Background Image */}
        <Image source={{ uri: user.backImage }} style={styles.backImage} />

        <View style={styles.headerContent}>
          {/* Profile Image  */}
          <Image source={{ uri: user.image }} style={styles.image} />

          {/* Name and Position */}
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>

          {/* Connect Button  */}
          <Pressable onPress={onConnect} style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
      </View>

      {/* About  */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{user.about}</Text>
      </View>

      {/* Experience */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
  },
  backImage: {
    width: "100%",
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  headerContent: {
    padding: 10,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    fontSize: 30,
    fontWeight: "500",
  },

  //Button
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  section: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  paragraph: {
   lineHeight: 20,
   letterSpacing: 0.2,
  },
});
