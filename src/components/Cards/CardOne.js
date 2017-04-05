import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CardOne = () => (
    <View>
      <Image
        source={require('../../images/bd.jpg')}
        style={{ height: 248 }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']}
        style={styles.linearGradient}
      />
      <View style={styles.cardContainer}>
        <Image
          source={require('../../images/main1.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <Text numberOfLines={2} style={styles.cardTitle}>
            Beauty And The Beast
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.cardGenreItem}>Action</Text>
          <Text style={styles.cardGenreItem}>Comedy</Text>
          <Text style={styles.cardGenreItem}>Thriller</Text>
          </View>
        </View>
      </View>
    </View>
  );

const styles = {
  linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
  cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
  cardContainer: {
		position: 'absolute',
		top: 32,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
  cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
  cardDetails: {
    paddingLeft: 10,
    flex: 1
  },
  cardGenreItem: {
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	}
};

export default CardOne;
