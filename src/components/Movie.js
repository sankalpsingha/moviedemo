import React, { Component } from 'react';
import { ScrollView, Text, View, RefreshControl, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from './Tabs/DefaultTabBar';
import Info from './Tabs/Info';
import Cast from './Tabs/Cast';
import Trailers from './Tabs/Trailers';

class Movie extends Component {

  constructor(props) {
		super(props);

		this.state = {
			castsTabHeight: null,
			heightAnim: null,
			infoTabHeight: null,
			trailersTabHeight: null,
			tab: 0,
		};
}
_getTabHeight(tabName, height) {
  if (tabName === 'casts') this.setState({ castsTabHeight: height });
  if (tabName === 'trailers') this.setState({ trailersTabHeight: height });
}

  render() {
    return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{ flex: 1 }}
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
          <View style={{ marginTop: 150, flex: 1 }}>
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
              <Cast tabLabel='CASTS' />
              <Trailers tabLabel='TRAILERS' />
            </ScrollableTabView>
          </View>

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
