import {StyleSheet, Text, View, Button, Settings} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import LaporanScreen from '../LaporanScreen';
import SettingsScreen from './SettingsScreen';
import NotificationScreen from './NotificationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tab1}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Laporan" component={LaporanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

export function Tab1() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notifikasi" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
