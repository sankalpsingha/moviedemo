import React from 'react';
import { Text, View, Image } from 'react-native';

const Trailers = () => {
  return (
    <View style={{ margin: 15 }}>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Beauty and the Beast-</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>Lumiere Motion Poster</Text>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Beauty and the Beast-</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>Lumiere Motion Poster</Text>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Beauty and the Beast-</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>Lumiere Motion Poster</Text>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Beauty and the Beast-</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>Lumiere Motion Poster</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  castContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 2
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center'
  }
};

export default Trailers;
