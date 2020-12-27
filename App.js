import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Linking, Image, ScrollView, TouchableHighlight, Platform, Button} from 'react-native';
import Emoji from 'react-native-emoji';


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <View style={{paddingBottom: '10%', paddingTop:'10%'}}>
          <Image style={styles.image} source={require('./assets/Anjali_Iyer.png')}></Image>
        </View>
        <View style={{paddingLeft: '5%', paddingRight: '5%'}}>
          <Text style={{color:'white', fontSize:18, textAlign: 'center', fontFamily: Platform.OS === "android" ? 'monospace':'Courier'}}>Hello World <Emoji name="earth_africa" style={{fontSize: 18}} /> Welcome to my first React Native Application <Emoji name="computer" style={{fontSize: 18}} /> </Text>  
        </View>
        <View style={{paddingTop:'5%'}}>
          <Text style={{color:'white', fontSize:18, textAlign: 'center', fontFamily: Platform.OS === "android" ? 'monospace':'Courier'}}>I wanted a central place to track my progress on LeetCode and learn a new technology. The result is this iOS app!</Text>
        </View>
        <View style={{paddingTop:'5%'}}>
          <Button title="Click Here"/> 
          <Text style={{color:'white', fontSize:18, textAlign: 'center', fontFamily: Platform.OS === "android" ? 'monospace':'Courier'}}>To View My Progress.</Text>
        </View>
        <View style={{paddingTop:'5%'}}>
          <Text style={styles.text}>Anjali Iyer</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:'5%'}}>
          <TouchableHighlight onPress={()=>{return Linking.openURL('https://www.linkedin.com/in/anjaliiyer/')}}>
            <Image style={{height:40,width:40, marginHorizontal:'10%'}} source={require('./assets/linkedin.png')}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{return Linking.openURL('https://twitter.com/anjali_iyer12')}}>
            <Image style={{height:40,width:40, marginHorizontal:'10%'}} source={require('./assets/twitter.png')}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{return Linking.openURL('https://github.com/anjaliiyer12')}}>
            <Image style={{height:40,width:40}} source={require('./assets/github.png')}/>
          </TouchableHighlight>
        </View>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color:'white',
    fontSize: 20,
    fontFamily: Platform.OS === "android"? 'Roboto':'Zapfino',
  },
  image: {
    width:300,
    height: 300
  }

});
