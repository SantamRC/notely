import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const Cards = props => (
  <Card style={styles.card}>
    <Card.Title title={props.title} />
    <Card.Content>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default Cards;

const styles = StyleSheet.create({
  card: {
    marginTop: '5%',
    marginBottom: '5%',
  },
});
