import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textStyle}>Movies</Text>
    </View>
  );
};

const styles = {
  headerContainer: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold'
  }
};
export default Header;
