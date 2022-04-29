import * as React from 'react';
import {Headline} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Mynotes from './Components/Mynotes';

const MyComponent = () => (
  <View>
    <Headline style={styles.headline}>Notely</Headline>
    <Mynotes />
  </View>
);

export default MyComponent;

const styles = StyleSheet.create({
  headline: {
    color: 'black',
    marginLeft: '5%',
    padding: 10,
  },
});
