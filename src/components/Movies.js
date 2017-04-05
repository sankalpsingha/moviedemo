import React, { Component } from 'react';
import { ScrollView, Text, RefreshControl, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import Header from './Misc/Header';
import CardOne from './Cards/CardOne';

class Movies extends Component {
  render() {
    const iconPlay = <Icon name="md-play" size={21} color="#9F9F9F" style={{ paddingLeft: 3, width: 22 }} />;
		const iconTop = <Icon name="md-trending-up" size={21} color="#9F9F9F" style={{ width: 22 }} />;
		const iconUp = <Icon name="md-recording" size={21} color="#9F9F9F" style={{ width: 22 }} />;

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView
          style={styles.container}
          refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => { console.log('Test'); }}
						colors={['#EA0000']}
						tintColor="white"
						title="loading..."
						titleColor="white"
						progressBackgroundColor="white"
					/>}
        >
      <Swiper
				autoplay
				autoplayTimeout={4}
				showsPagination={false}
				height={248}
      >
				<CardOne />
        <CardOne />
			</Swiper>

          {/* <Text style={{ color: 'white' }}>
            Hello..
          </Text>
          {iconPlay}
          {iconTop}
          {iconUp} */}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'black'
  }
};

export default Movies;
