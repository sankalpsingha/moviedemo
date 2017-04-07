import React from 'react';
import { View, Text, Image } from 'react-native';

const Info = () => {
  console.log('INFO PAGE');
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../images/bd.jpg')}
      />
      <View style={{ marginBottom: 15 }}>
      <Text style={{ color: 'white' }}>OverView</Text>
      <Text style={{ color: 'white' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
        derit illa pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      </View>
    </View>
  );
};

export default Info;
