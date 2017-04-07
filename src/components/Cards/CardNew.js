import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux';

const CardNew = () => {
  return (
    <View>
      <Image source={require('../../images/bd.jpg')} style={{ height: 250, width: 500 }} />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']}
        style={styles.linearGradient}
      />
      <View
        style={{ position: 'absolute', top: 20, left: 15, right: 15, flexDirection: 'row' }}
      >
        <Image
          source={require('../../images/main1.jpg')}
          style={{ width: 150, height: 210, borderRadius: 5 }}
        />
        <View style={{ paddingLeft: 10, flex: 1, marginVertical: 7 }}>
          <Text
            style={{ color: 'white', fontSize: 19, fontWeight: 'bold' }}
            numberOfLines={2}
          >
            Beauty And The Beast</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.movieGenreText}>
                Actions
              </Text>
              <Text style={styles.movieGenreText}>
                Comedy
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 3 }}>
              <Icon name="md-star" size={16} color="#F5B642" />
              <Text style={styles.movieGenreText}>
                8.9
              </Text>
            </View>
            <Text style={styles.movieGenreText} numberOfLines={3}>
              aute irure dolor in r
              eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              velit esse cillum dolore eu fugiat nulla pariatur
            </Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => Actions.movie()}>
              <Text style={{ color: 'white' }}>View Details</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  linearGradient: {
    height: 250,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  },
  movieGenreText: {
    color: 'white',
    paddingRight: 5
  },
  buttonStyle: {
    backgroundColor: 'red',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    height: 30,
    width: 100
  }
};

export default CardNew;
