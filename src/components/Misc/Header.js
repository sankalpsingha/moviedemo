import React from 'react';
import { View, Text } from 'react-native';

const Header = () => (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Header
      </Text>
    </View>
  );

const styles = {
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
};
export default Header;
