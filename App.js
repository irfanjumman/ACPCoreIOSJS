import React, { useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuItems from './MenuItems';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import { ACPMobileLogLevel, ACPCore, ACPIdentity, ACPLifecycle, ACPSignal } from '@adobe/react-native-acpcore';
// import {ACPAnalytics} from '@adobe/react-native-acpanalytics';


const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    startAdobe();
  },[])

  const startAdobe = async () => {
    try {
      ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
      ACPCore.configureWithAppId('77d981f695af/d25999468a17/launch-b5aca324a9ab-development');
      ACPIdentity.registerExtension();
      ACPLifecycle.registerExtension();
      // ACPAnalytics.registerExtension();
      ACPSignal.registerExtension();
      await ACPCore.start();
    } catch (err) {
    console.log("adobe error", err);
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'MenuItems'}
        headerMode="none"
        screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name={'MenuItems'} component={MenuItems} />
        <Stack.Screen name={'HomePage'} component={HomePage} />
        <Stack.Screen name={'ProfilePage'} component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

