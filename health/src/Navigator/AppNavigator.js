// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import DashboardScreen from '../screens/DashboardScreen';
import RemindersScreen from '../screens/RemindersScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import WellnessScreen from '../screens/WellnessScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import CommunicationScreen from '../screens/CommunicationScreen';
import VoiceCommandScreen from '../screens/VoiceCommandScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
        <Stack.Screen name="Wellness" component={WellnessScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="Communication" component={CommunicationScreen} />
        <Stack.Screen name="VoiceCommand" component={VoiceCommandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
