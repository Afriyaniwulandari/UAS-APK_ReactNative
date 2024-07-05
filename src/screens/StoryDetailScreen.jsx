import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const StoryDetail = () => {
  const route = useRoute();
  const {story} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.content}>{story.content}</Text>
    </ScrollView>
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
  },
  content: {
    fontSize: 18,
  },
});

export default StoryDetail;
