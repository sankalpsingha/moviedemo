import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const SmallCard = () => {
  return (
    <TouchableOpacity>
      <View style={{ width: 150, backgroundColor: 'white', marginRight: 10, borderRadius: 5 }}>
        <Image
          source={require('../../images/main1.jpg')}
          style={{ width: 150, height: 210, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        />
      <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Cards</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default SmallCard;
