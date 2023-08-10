import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Stock = ({}) => {
  return (
    <View style={styles.container}>
      <Text>This is screen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Stock;
