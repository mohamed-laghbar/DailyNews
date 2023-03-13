import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Article = ({route}) => {
  const {article} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>
        {article.description}
      </Text>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>Author:</Text>
        <Text style={styles.authorName}>{article.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  authorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  authorName: {
    fontSize: 16,
  },
  content: {
    fontSize: 16,
  },
});

export default Article;
