import {
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

export default function NewPostScreen() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const router = useRouter();

  const navigation = useNavigation();

  const onPost = () => {
    console.warn("Posting: ", content);

    router.push("/(tabs)/home");
    setContent("");
    setImage("");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Submit</Text>
        </Pressable>
      ),
    });
  }, [onPost]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="What do you want to talk about?"
        style={styles.input}
        multiline
      />

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.footer}>
        <Pressable onPress={pickImage} style={styles.iconButton}>
          <FontAwesome name="image" size={24} color="black" />
        </Pressable>

        <View style={styles.iconButton}>
          <FontAwesome name="camera" size={24} color="black" />
        </View>

        <View style={styles.iconButton}>
          <FontAwesome name="glass" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postButton: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: "auto",
  },
  footer: {
    marginTop: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    backgroundColor: "gainsboro",
    padding: 20,
    borderRadius: 100,
  },
});
