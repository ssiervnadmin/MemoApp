import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BodyText = ({ value1, value2 }) => (
  <View>
    <Text style={styles.text}>
      { value1 }
    </Text>
    <Text style={styles.text}>
      { value2 }
    </Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: '#ff0000',
    backgroundColor: '#fff',
  },
});

export default BodyText;
