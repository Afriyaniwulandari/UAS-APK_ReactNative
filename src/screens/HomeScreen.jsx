import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
        <Text>Ke Profil</Text>
      </TouchableOpacity>
    </View>
  );
}
