import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import FAB from './FAB';
import Cards from './Cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../data';

const Mynotes = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [reminder, setReminder] = useState([]);
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    async function getValues() {
      try {
        const res = await AsyncStorage.getItem('reminder');
        const array = res.substring(1, res.length - 1).split(',');
        console.log(array);
        setReminder(array);
      } catch (err) {
        console.log(err);
      }
    }
    getValues();
  }, []);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.Searchbar}
      />

      <View>
        {data.map(item => {
          return <Cards key={item.id} title={item.title} />;
        })}
      </View>
      <FAB />
    </View>
  );
};

export default Mynotes;

const styles = StyleSheet.create({
  Searchbar: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'relative',
    bottom: 10,
    right: 10,
  },
});
