import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Laporan')}>
        <Text>Layar Profil</Text>
      </TouchableOpacity>
    </View>
  );
}
