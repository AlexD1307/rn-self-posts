import React from 'react'
import { Post } from "../components/Post"
import { PostList } from "../components/PostList"
import { useSelector } from "react-redux"

export const BookedScreen = ({navigation}) => {
  const bookedPosts = useSelector(state => state.post.bookedPosts)

  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }
  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}
