import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import { Platform } from "react-native"
import { THEME } from "../theme"
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { BookedScreen } from "../screens/BookedScreen"
import { CreateScreen } from "../screens/CreateScreen"

const Stack = createStackNavigator()

const postScreenOptions = ({route}) => {
  const {date, booked, toggleHandler} = route.params
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: 'Post from ' + new Date(date).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName={iconName}
          onPress={toggleHandler}
        />
      </HeaderButtons>
    ),
  }
}

const headerStyle = () => ({
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
})

const toggleMenu = (navigation) => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title='Toggle Drawer'
      iconName='ios-menu'
      onPress={navigation.toggleDrawer}
    />
  </HeaderButtons>
)

export const postStackNavigator = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Main"
    screenOptions={headerStyle}
  >
    <Stack.Screen name='Main' component={MainScreen} options={{
      headerTitle: 'My blog',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Take photo'
            iconName='ios-camera'
            onPress={() => navigation.navigate('Create')}
          />
        </HeaderButtons>
      ),
      headerLeft: toggleMenu.bind(null, navigation),
    }}/>
    <Stack.Screen name='Post' component={PostScreen} options={postScreenOptions}/>
  </Stack.Navigator>
)

export const BookedStackNavigator = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Booked"
    screenOptions={headerStyle}
  >
    <Stack.Screen
      name='Booked'
      component={BookedScreen}
      options={{headerLeft: toggleMenu.bind(null, navigation)}}
    />
    <Stack.Screen name='Post' component={PostScreen} options={postScreenOptions}/>
  </Stack.Navigator>
)

export const newPostStackNavigator = ({navigation}) => (
  <Stack.Navigator screenOptions={headerStyle}>
    <Stack.Screen
      name='Create'
      component={CreateScreen}
      options={{
        headerTitle: 'Create post',
        headerLeft: toggleMenu.bind(null, navigation)
      }}
    />
  </Stack.Navigator>
)
