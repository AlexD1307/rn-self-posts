import {View, ActivityIndicator, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {Post} from '../components/Post'
import {PostList} from '../components/PostList'
import {loadPosts} from '../store/actions/post'
import {useDispatch, useSelector} from 'react-redux'

export const MainScreen = ({navigation}) => {
  const allPosts = useSelector(state => state.post.allPosts)
  const isLoading = useSelector(state => state.post.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  if (isLoading) {
    return <View style={styles.center}>
      <ActivityIndicator color={THEME.MAIN_COLOR}/>
    </View>
  }

  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  return <PostList data={allPosts} onOpen={openPostHandler}/>
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
