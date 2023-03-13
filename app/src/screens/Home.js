import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import {API} from '@env';
import {ScrollView} from 'react-native-gesture-handler';

const News = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getAllNews() {
      try {
        const response = await axios.get(API);

        const allNews = response.data.articles;
        setNews(allNews);
      } catch (error) {
        console.error(error);
      }
    }
    getAllNews();
  }, []);

  return (
    <ScrollView>
      <View style={[styles.container, styles.shadowProp]}>
        <Text style={styles.heading}>Latest News</Text>
        {news &&
          news.length > 0 &&
          news.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Article', {article: item})}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSource}>
                {item.description}
              </Text>
              <Text style={styles.itemDescription}>Author: {item.author}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2DAFF',
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemSource: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
  },
});

export default News;
