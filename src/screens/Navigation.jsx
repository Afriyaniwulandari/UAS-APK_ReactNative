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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
        <Stack.Screen name="Profil" component={ProfileScreen} />
        <Stack.Screen name="Laporan" component={LaporanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

export function Tab1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pengaturan"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="cogs" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="bell" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
