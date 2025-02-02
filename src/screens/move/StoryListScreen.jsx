import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import stories from '../../data/stories';

const StoryList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {category} = route.params;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('StoryDetail', {story: item})}>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../images/foto.jpg')} />
      <View style={{paddingTop: 30, marginTop: 30}}>
        <Text style={styles.title}>
          Cerita {category === 'dongeng' ? 'Dongeng' : 'Rakyat'}
        </Text>
        <FlatList
          data={stories[category]}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
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
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  item: {
    padding: 15,

    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#345c78',
    backgroundColor: '#d598a3',
    width: 210,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default StoryList;
