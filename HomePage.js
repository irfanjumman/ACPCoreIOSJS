import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ACPCore} from '@adobe/react-native-acpcore';
import {ACPExtensionEvent} from '@adobe/react-native-acpcore';

export default function HomePage() {

    var event = new ACPExtensionEvent("HomePage button click Event", "button click", "HomePage", {"1": "Homepage details"});
    ACPCore.dispatchEvent(event);
    ACPCore.dispatchEventWithResponseCallback(event).then(responseEvent => console.log("AdobeExperienceSDK: responseEvent = " + responseEvent));

    let contextData = {"key1": "Home page button click in ACPCOREIOSJS", "key2": "Home page button click in ACPCOREIOSJS"}
    ACPCore.trackState("Home Page landing page in ACPCOREIOSJS", contextData);

    const navigation = useNavigation();
    return (
        <View style={{marginTop:400, justifyContent:'center', alignItems:'center'}}>
            <Button title="back" onPress={() => navigation.goBack()}>
                Back
            </Button>
            <Text style={{ color: 'blue' }}>
                Home Page
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
