import React from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'



class HomeScreen extends React.Component {
  render() {
    return (
      <View>
      <View>
      <Text> Din Din </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Home Screen Things</Text>
      </View>
      </View>
    );
  }
}
class InvitationScreen extends React.Component {
  render() {
    return (
      <View>
      <View>
      <Text> Din Din </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Invitation Details Screen</Text>
      </View>
      </View>
    );
  }
}
class EventDetailsScreen extends React.Component {
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
class CreateEventScreen extends React.Component {
  render() {
    return (
      <View>
      <View>
      <Text> Din Din </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Create Event Screen</Text>
      </View>
      </View>
    );
  }
}
 class SplashScreen extends React.Component {
   constructor(props){
     super(props)
     this.state ={ fadein : true, myimage:'./assets/snack-icon.png' }
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
          <Image source={require(this.myimage)} style={{width: 100, height: 100, textAlign: 'center'}}/>
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
    else{
      return (
      <View style={styles.button}>
          <Image source={require('./assets/snack-icon.png')} style={{width: 40, height: 40, textAlign: 'center'}}/>
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

const Appa = () => <AppContainer persistenceKey={"NavigationState"} />;
export default class App extends React.Component {
  render() {
  return <Appa/>
  }
}



const styles = StyleSheet.create({
  logo:{
    color: '#353535',
    family: 'Helvetica',
    fontSize: 29,
    height:100,
    textAlign: 'center',
  },
  subtext:{
    color: '#000000',
    opacity: .5,
    family: "Helvetica",
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
