import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { SubmissionScreen } from '../screens/SubmissionScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        // 
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            },

            // headerShown: false
        }}
        >
            <Stack.Screen name="LoginScreen" options={{headerShown:false}}  component={LoginScreen} />
            <Stack.Screen name="SubmissionScreen" component={SubmissionScreen} />

        </Stack.Navigator>
    )
}
