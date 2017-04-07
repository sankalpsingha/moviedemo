import React, { Component } from 'react';
import { ScrollView, Text, View, RefreshControl, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
// import DefaultTabBar from './Tabs/DefaultTabBar';
import Info from './Tabs/Info';

class Movie extends Component {
  
  render() {
    return (

      <ScrollView
      style={{ backgroundColor: 'black' }}
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
      >
      <Swiper
        autoplay
        autoplayTimeout={5}
        showsPagination={false}
        height={250}
        loop
      >
        <View>
          <Image
            source={require('../images/bd.jpg')}
            style={{ height: 250, width: 500 }}
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}
            style={styles.linearGradient}
          />
        </View>
        <View>
          <Image
            source={require('../images/bd.jpg')}
            style={{ height: 250, width: 500 }}
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}
            style={styles.linearGradient}
          />
        </View>
        <View>
          <Image
            source={require('../images/bd.jpg')}
            style={{ height: 250, width: 500 }}
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}
            style={styles.linearGradient}
          />
        </View>
      </Swiper>
        <View style={styles.card}>
          <Image
            source={require('../images/main1.jpg')}
            style={{ width: 135, height: 200, borderRadius: 3 }}
          />
          <View style={styles.cardInfo}>
            <Text
              style={{ color: 'white', fontWeight: '500', fontSize: 19 }}

            >Beauty and the Beast</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>Be our guest</Text>
            <View style={styles.genreContainer}>
              <Text style={styles.genreText}>Fantasy</Text>
              <Text style={styles.genreText}>Music</Text>
              <Text style={styles.genreText}>Romance</Text>
            </View>
            <View style={styles.genreContainer}>
              <Icon name="md-star" size={16} color="#F5B642" />
              <Text style={{ color: 'white', paddingLeft: 5 }}>8.9</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 150 }}>
          <ScrollableTabView

          onChangeTab={() => console.log('tab changed')}
          renderTabBar={() => (
            <DefaultTabBar
              textStyle={styles.textStyle}
              underlineStyle={styles.underlineStyle}
              style={styles.tabBar}
            />
          )}
          >
            <Info tabLabel='INFO' />
            <ScrollView tabLabel='CASTS'>
              <Text style={{ color: '#fff' }}>ifrfsrff</Text>
              <Icon name='logo-apple' color='white' size={300} style={styles.icon} />
              <Icon name='ios-phone-portrait' color='white' size={300} style={styles.icon} />
              <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
              <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} />
            </ScrollView>
            <ScrollView tabLabel='TRAILERS'>
              <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
              <Icon name='logo-android' color='white' size={300} style={styles.icon} />
              <Icon name='logo-android' color='white' size={300} style={styles.icon} />
            </ScrollView>
          </ScrollableTabView>
        </View>
        <ScrollableTabView>
          <Text tabLabel='Tab #1' style={{ color: 'white', position: 'absolute', top: 50 }}>My</Text>
          <Text tabLabel='Tab #2' style={{ color: 'white' }}>favorite</Text>
          <Text tabLabel='Tab #3' style={{ color: 'white' }}>project</Text>
        </ScrollableTabView>

      </ScrollView>

    );
  }
}

const styles = {
  linearGradient: {
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    position: 'absolute'
  },
  card: {
    flexDirection: 'row',
    position: 'absolute',
    top: 190,
    left: 15,
    right: 15,
    flex: 1
  },
  cardInfo: {
    flex: 1,
    paddingLeft: 7,
    paddingTop: 70
  },
  genreContainer: {
    flexDirection: 'row',
    paddingTop: 7
  },
  genreText: {
    color: 'white',
    paddingRight: 5,
    fontSize: 11
  },
  textStyle: {
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
	},
	underlineStyle: {
		backgroundColor: '#EA0000'
	},
	tabBar: {
		backgroundColor: '#131313'
	},
  icon: {
      width: 300,
      height: 300,
      alignSelf: 'center',
    },
};

export default Movie;
