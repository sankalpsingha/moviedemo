import React from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './Header';
import CardNew from './Cards/CardNew';
import SmallCard from './Cards/SmallCard';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => { console.log('refreshed'); }}
						colors={['#EA0000']}
						tintColor="white"
						title="loading..."
						titleColor="white"
						progressBackgroundColor="white"
          />
        }
        style={{ backgroundColor: 'black' }}
      >
        <Swiper
          // style={styles.swiperStyle}
          autoplay
          autoplayTimeout={5}
          showsPagination={false}
          height={250}
        >
          <CardNew />
          <CardNew />
          <CardNew />
        </Swiper>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
            <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', paddingLeft: 15 }}>Popular</Text>
            <Text style={{ color: 'white', fontSize: 19, paddingRight: 15 }}>See All</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = {
  swiperStyle: {
    height: 250
  }
};

export default Home;
