import React, { useCallback, useEffect } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, Button, Alert } from 'react-native'
import { THEME } from "../theme"
import { useDispatch, useSelector } from "react-redux"
import { removePost, toggleBooked } from "../store/actions/post"

export const PostScreen = ({route, navigation}) => {
  const {postId} = route.params
  const dispatch = useDispatch()
  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))
  const post = useSelector(state => state.post.allPosts.find(post => post.id === postId))

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    navigation.setParams({booked})
  }, [booked])

  useEffect(() => {
    navigation.setParams({toggleHandler})
  }, [toggleHandler])


  const removeHandler = () => {
    Alert.alert(
      "Delete post",
      "Are you sure, you want to delete post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete", style: 'destructive', onPress() {
            navigation.navigate('Main')
            dispatch(removePost(postId))
          },
        },
      ],
      {cancelable: false},
    )
  }

  if (!post) {
    return null
  }

  return (
    <ScrollView>
      <Image source={{uri: post.img}} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
})
