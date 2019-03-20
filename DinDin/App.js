import React from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, TouchableOpacity, } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements'
import {SecureStore} from 'expo'
import {HomeScreen, InvitationScreen, EventDetailsScreen, CreateEventScreen, SplashScreen} from './components'


const RootStack= createStackNavigator(
  {
  Home:{
    screen: HomeScreen
  },
  Splash:{
    screen: SplashScreen
  },
  CreateEvent:{
    screen: CreateEventScreen
  },
  Invitation:{
    screen: InvitationScreen
  },
  EventDetails:{
    screen: EventDetailsScreen
  },
  },
  {
    initialRouteName: 'Splash',
  }
  )


const AppContainer = createAppContainer(RootStack)
const AppNavigator = () => <AppContainer persistenceKey={"NavigationState"} />



export default class App extends React.Component {
  render() {
  return <AppNavigator/>
  }
}
