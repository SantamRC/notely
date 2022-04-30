import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Reminder from './Reminder';
import Image from './Images';

const FAB = () => {
  const [reminder, setReminder] = useState(false);
  const [audio, setAudio] = useState(false);
  const [image, setImage] = useState(false);
  const [general, setGeneral] = useState(false);

  const animation = new Animated.Value(0);

  return (
    <View style={styles.fab}>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <FontIcon name="pencil" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setImage(!image)}>
        <Animated.View style={styles.icon}>
          <FontIcon name="file-image-o" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <FontIcon name="file-audio-o" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setReminder(!reminder)}>
        <Animated.View style={styles.icon}>
          <FontIcon name="calendar" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={styles.icon}>
          <Icon name="pluscircle" size={40} color="blue" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <View>
        <Reminder open={reminder} setOpen={setReminder} />
        <Image open={image} setOpen={setImage} />
      </View>
    </View>
  );
};

export default FAB;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: -100,
    right: 10,
    flexDirection: 'row',
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
