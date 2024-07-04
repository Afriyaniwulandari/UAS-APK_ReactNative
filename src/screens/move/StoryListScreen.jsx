import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryScreen = ({navigation, route}) => {
  const {category} = route.params;

  // Dummy data for now
  const stories = [
    {id: 1, title: 'Cerita 1'},
    {id: 2, title: 'Cerita 2'},
    {id: 3, title: 'Cerita 3'},
    {id: 4, title: 'Cerita 4'},
    {id: 5, title: 'Cerita 5'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Story', {storyId: item.id})}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});

export default CategoryScreen;
