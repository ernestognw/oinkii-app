import React from "react";
import { ListItem, Left, Body, Right, Icon } from 'native-base';
import { Text, StyleSheet } from 'react-native';

function ListRecord(props) {
  return (
    <ListItem avatar>
      <Left>
        <Icon type="Entypo" name={props.income ? 'circle-with-plus' : 'circle-with-minus'} style={props.income ? styles.iconIncome : styles.iconExpense} />
      </Left>
      <Body>
        <Text>${props.quantity}</Text>
        <Text style={styles.comment}>{props.description}</Text>
      </Body>
      <Right>
        <Text note>{props.hour}</Text>
      </Right>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  comment: {
    fontSize: 10,
  },
  iconIncome: {
    color: '#A1BE4F'
  },
  iconExpense: {
    color: '#B73A77'
  },
})

export default ListRecord;