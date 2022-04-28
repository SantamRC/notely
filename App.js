import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Headline} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const MyComponent = () => (
  <Appbar style={styles.navbar}>
    <Headline style={styles.headline}>Notely</Headline>
  </Appbar>
);

export default MyComponent;

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'white',
  },
  headline: {
    color: 'black',
    marginLeft: 10,
  },
});
