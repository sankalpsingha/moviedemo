import React from 'react';
import { Text, View, Image } from 'react-native';

const Cast = () => {
  return (
    <View style={{ margin: 15 }}>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Emma Watson</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>as Belle</Text>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Emma Watson</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>as Belle</Text>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Emma Watson</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>as Belle</Text>
        </View>
      </View>
      <View style={styles.castContainer}>
        <Image source={require('../../images/main1.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Emma Watson</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>as Belle</Text>
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
    width: 80,
    height: 80,
    borderRadius: 80 / 2
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center'
  }
};

export default Cast;
