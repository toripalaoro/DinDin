import React from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, TouchableOpacity, } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements'
import {SecureStore} from 'expo'

export default  class SplashScreen extends React.Component {
   
  constructor(props){
     super(props)
     this.state ={ fadein : true, myimage:'./assets/Illustration.png' }
   }
    componentDidMount() {
    this.timerID = setInterval(() => {this.tick()}, 1000);
  }
  tick() {
    this.fadein = !this.fadein
    if(this.fadein == true){
      
    }
    if(this.fadein == false){

    }
        }
  render() {
    if(this.fadein ==true){
    return (
      <View style={styles.button}>
      <View style={styles.container}>
      <View style={{width: 100, height: 100, flex:1,justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <Image source={require('./assets/Illustration.png')}/>
          </View>
          <Text style={styles.logo}> DinDin </Text>
          <Text style={styles.subtext}> connecting food lovers</Text>
          <View>
          <Button 
          style={styles.button}
          title="Get Started"
          onPress={()=> { this.props.navigation.navigate('Home')
            }
          }
          />
          </View>
          </View>
      </View>
    )
    }
    else{
      return (
      <View style={styles.button}>
          <Image source={require('./assets/Illustration.png')} style={{width: 40, height: 40, textAlign: 'center'}}/>
          <Text style={styles.logo}> DinDin </Text>
          <Text style={styles.subtext}> connecting food lovers</Text>
          <View>
          <Button 
          style={styles.button}
          title="Get Started"
          onPress={()=> { this.props.navigation.navigate('Home')
            }
          }
          />
          </View>
      </View>
    )
    }
    
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
  