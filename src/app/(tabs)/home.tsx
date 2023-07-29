import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import PostListItem from "@/components/PostListItem";
import posts from "../../../LinkedIn Asset Bundle/data/posts.json";

export default function HomeFeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
