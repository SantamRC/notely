import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const FAB = () => {
  const animation = new Animated.Value(0);

  return (
    <View style={styles.fab}>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <FontIcon name="pencil" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <FontIcon name="file-image-o" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <FontIcon name="file-audio-o" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <FontIcon name="calendar" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <Icon name="pluscircle" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FAB;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: -100,
    right: 10,
  },
  icon: {
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
    },
  },
});
