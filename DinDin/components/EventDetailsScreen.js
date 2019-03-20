import React from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, TouchableOpacity, } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements'
import {SecureStore} from 'expo'

export default class EventDetailsScreen extends React.Component {
  render() {
    return (
     <View style={styles.button}>
          <View>
          <Button 
          style={styles.button}
          title="Cancel Dinner"
          onPress={()=> { this.props.navigation.navigate('Home') 
            }
          }
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row'
    },
    logo:{
      color: '#353535',
      fontSize: 29,
      height:100,
      textAlign: 'center',
    },
    subtext:{
      color: '#000000',
      opacity: .5,
      fontSize: 14,
      height:100,
      textAlign: 'center'
    },
    button:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }
  });
  