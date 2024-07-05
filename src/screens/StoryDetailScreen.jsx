import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const StoryDetail = () => {
  const route = useRoute();
  const {story} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.content}>{story.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'black',
  },
  scrollViewContent: {
    paddingBottom: 16,
  },
  content: {
    fontSize: 18,
    textAlign: 'justify',
    color: 'black',
  },
});

export default StoryDetail;
