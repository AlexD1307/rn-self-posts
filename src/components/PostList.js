import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { Post } from "./Post"

export const PostList = ({data, onOpen}) => {

  if (!data.length) {
    return <View style={styles.wrapper}>
      <Text style={styles.noItem}>There is no posts yet</Text>
    </View>
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtraktor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={onOpen} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItem: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18
  }
})
