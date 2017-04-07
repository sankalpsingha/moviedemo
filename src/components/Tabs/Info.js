import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Info = () => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <View style={{ marginBottom: 15 }}>
      <Text style={styles.headingText}>OverView</Text>
      <Text style={{ color: 'white', fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
      </Text>

      <Text style={{ color: 'white', fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
      </Text>

      <Text style={{ color: 'white', fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
      </Text>

      <Text style={{ color: 'white', fontSize: 14 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
      </Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Release Date</Text>
        <Text style={styles.value}>March 17, 2017</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Directed By</Text>
        <Text style={styles.value}>Nil Agar</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Budget</Text>
        <Text style={styles.value}>Rs.1,5823668 </Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  headingText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 10
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  value: {
    color: 'white',
    fontSize: 14,
  }
};

export default Info;
