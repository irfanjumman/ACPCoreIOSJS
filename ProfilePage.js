import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ACPCore} from '@adobe/react-native-acpcore';
import {ACPExtensionEvent} from '@adobe/react-native-acpcore';

export default function ProfilePage() {

    var event = new ACPExtensionEvent("ProfilePage button click Event", "button click", "ProfilePage", {"2": "ProfilePage details"});
    ACPCore.dispatchEvent(event);
    ACPCore.dispatchEventWithResponseCallback(event).then(responseEvent => console.log("AdobeExperienceSDK: responseEvent = " + responseEvent));


    let contextData = {"key1": "Profile page button click in ACPCOREIOSJS", "key2": "Profile page button click in ACPCOREIOSJS"}
    ACPCore.trackState("Profile Page landing page in ACPCOREIOSJS", contextData);

    const navigation = useNavigation();
    return (
        <View style={{marginTop:400, justifyContent:'center', alignItems:'center'}}>
            <Button title="back" onPress={() => navigation.goBack()}>
                Back
            </Button>
            <Text style={{ color: 'blue' }}>
                Profile Page
            </Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginTop: 200,
        marginLeft: 30
    },
});