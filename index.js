// index.js
import { View, Text } from 'react-native';
import React from 'react';

const MySimpleComponent = () => {
  return (
    <View style={{ padding: 20, backgroundColor: 'lightblue' }}>
      <Text>Hello from my first React Native package!</Text>
    </View>
  );
};

export default MySimpleComponent;
