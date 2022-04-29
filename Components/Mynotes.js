import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import FAB from './FAB';

const Mynotes = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.Searchbar}
      />
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
