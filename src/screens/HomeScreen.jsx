import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
// import {useState} from 'react';
import React from 'react';
// import React from 'react';
// import {Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kumpulan Dongeng Pilihan</Text>
      <Button
        title="Cerita Dongeng"
        onPress={() => navigation.navigate('StoryList', {category: 'dongeng'})}
      />
      <Button
        title="Cerita Rakyat"
        onPress={() => navigation.navigate('StoryList', {category: 'rakyat'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

// export default HomeScreen;

export default function Home({navigation}) {}
