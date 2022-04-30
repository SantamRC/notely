import {StyleSheet, Text, View, Modal, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Reminder = props => {
  const [title, setTitle] = useState('');

  const storeData = async value => {
    try {
      const res = await AsyncStorage.getItem('reminder');
      const array = res.substring(1, res.length - 1).split(',');
      const new_array = array.push({title: title});
      await AsyncStorage.setItem('reminder', String(new_array));
    } catch (e) {
      // saving error
      console.log('Error: ' + e);
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.open}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setOpen(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Reminder</Text>
            <TextInput
              style={{height: '7%', width: '90%', flex: 1}}
              mode="outlined"
              label="Title"
              value={title}
              onChangeText={title => setTitle(title)}
            />
            <TextInput
              style={{
                height: '7%',
                width: '90%',
                flex: 4,
                marginTop: '8%',
                marginBottom: '8%',
              }}
              mode="outlined"
              label="Text"
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Pressable
                style={[styles.button, styles.buttonModal, {marginRight: '2%'}]}
                onPress={() => props.setOpen(false)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonModal, {marginLeft: '2%'}]}
                onPress={() => {
                  storeData();
                  props.setOpen(false);
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: '95%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonModal: {
    backgroundColor: '#2196F3',
    width: '40%',
    height: '60%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
  },
});
