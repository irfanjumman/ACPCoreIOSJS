import React from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';
import {ACPCore} from '@adobe/react-native-acpcore';
import {useNavigation} from '@react-navigation/native';
export default function MenuItems() {
    const navigation = useNavigation();

    let contextData = {"key1": "ACPCOREIOSJS project Landing page", "key2": "ACPCOREIOSJS project Landing page"}
    ACPCore.trackState("Landing Page in ACPCOREIOSJS project ", contextData);

  return (
    <View style={{backgroundColor:'blue', display:'flex', flexDirection:'row', marginTop:300, justifyContent:'space-around', marginLeft:20, marginRight:20}}>
       <Button color="#ffffff" title="Home Page" onPress={()=>{
           navigation.navigate('HomePage')
           let buttonData = {"Home Page button": "Home Page Button clicked in ACPCOREIOSJS"}
          ACPCore.trackAction("Home Page Button in ACPCOREIOSJS", buttonData)
           }}>
            Home Page
       </Button>
       <Button color="#ffffff" title="Profile Page" onPress={()=>{
           navigation.navigate('ProfilePage')
           let buttonData = {"Profile Page button": "ProfilePage Button clicked in ACPCOREIOSJS"}
           ACPCore.trackAction("Profile  Page Button in ACPCOREIOSJS", buttonData)
           }}>
           Profile Page
       </Button>
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    // marginRight: 30,
    // marginLeft: 30,
    // top: 120,
  },
 
});
