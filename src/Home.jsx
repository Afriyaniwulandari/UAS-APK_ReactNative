import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Profile from './Profile';

export default function Home({Navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => Navigation.Navigate('Profile')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
