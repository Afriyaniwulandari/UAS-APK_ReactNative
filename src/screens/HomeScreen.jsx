import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kumpulan Dongeng Pilihan</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() =>
            navigation.navigate('StoryList', {category: 'dongeng'})
          }>
          <Text style={styles.boxText}>Dongeng Binatang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() =>
            navigation.navigate('StoryList', {category: 'rakyat'})
          }>
          <Text style={styles.boxText}>Cerita Rakyat</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    width: 125, // Ukuran kotak (lebar)
    height: 125, // Ukuran kotak (tinggi)
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#f9f9f9', // Warna latar belakang kotak
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
