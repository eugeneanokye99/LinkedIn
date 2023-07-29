import { Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useNavigation, useRouter } from 'expo-router';
import {useLayoutEffect, useState} from 'react'

export default function NewPostScreen() {
const [content, setContent] = useState('')

const router = useRouter()

  const navigation = useNavigation();

const onPost = () => {
  console.warn('Posting: ', content)

  router.push('/(tabs)/home');
  setContent('');
}
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>  (
        <Pressable onPress={onPost} style = {styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      )
    })
  
  }, [onPost])
 


  return (
    <View style={styles.container}>
      <TextInput 
      value={content}
      onChangeText={setContent}
      placeholder='What do you want to talk about?'
      style={styles.input}
      multiline
      />
     
    </View>
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
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: 'royalblue',
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  postButtonText:{
    color: 'white',
    fontWeight: 'bold',
  } 
 
});
