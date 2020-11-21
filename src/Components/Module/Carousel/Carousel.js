import React, {useState, useEffect, createRef} from 'react';
import {View, FlatList, Text, Dimensions, ImageBackground} from 'react-native';
import styles from './styles';
import {link,articles} from '@data';

let CurrentSlide = 0;
const Carousel = () => {
  const [images, setImages] = useState(link);
  const [newsList, setNewsList] = useState(articles)

  const getMoviesFromApiAsync = async () => {
    try {
      let response = await fetch(
        'http://newsapi.org/v2/top-headlines?country=id&apiKey=60de23c0ec87474f9450df4b9c8005e9'
      );
      let json = await response.json();
      return setNewsList(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesFromApiAsync()
    setImages(link);
    const interval = setInterval(() => {
      goToNextPage();
    }, 4000);
    return () => clearInterval(interval);
  }, [goToNextPage]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <ImageBackground source={{uri: item.urlToImage}} style={styles.sliderItems} resizeMode="cover">
              <Text style={styles.textHead} >{item.title}</Text>
              <Text  style={styles.textSub}>{item.description}</Text>
          </ImageBackground>
          <View style={styles.overlay}/>
      </View>
    );
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToNextPage = () => {
    if (CurrentSlide >= images.length - 1) {
      CurrentSlide = 0;
    }
    flatList?.current?.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  const flatList = createRef();

  return (
    <View>
      <FlatList
        data={newsList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').width}
        horizontal={true}
        pagingEnabled={true}
        flatListRef={React.createRef()}
        showsHorizontalScrollIndicator={false}
        ref={flatList}
      />
    </View>
  );
};

export default Carousel;
