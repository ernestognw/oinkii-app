import React from "react";
import { ListItem, Left, Body, Right, Icon, View } from "native-base";
import { Text, StyleSheet } from "react-native";

function ListRecord(props) {
  return (
    <View style={styles.mainView}>
      <ListItem avatar>
        <Left>
          <Icon
            type="MaterialIcons"
            name={props.income ? "attach-money" : "money-off"}
            style={props.income ? styles.iconIncome : styles.iconExpense}
          />
        </Left>
        <Body style={styles.normalizeStyleDetails}>
          <Text style={styles.quantity}>${props.quantity}</Text>
          <Text style={styles.comment}>{props.description}</Text>
        </Body>
        <Right style={styles.normalizeStyleDetails}>
          <Text note style={styles.hour}>{props.hour}</Text>
          <Text note style={styles.date}>
            {props.date}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  comment: {
    fontSize: 14,
  },
  date: {
    fontSize: 10,
  },
  hour: {
    fontWeight: '600',
    fontSize: 14,
  },
  quantity: {
    fontWeight: "600",
    fontSize: 18,
  },
  iconIncome: {
    color: "#A1BE4F",
    fontSize: 20
  },
  iconExpense: {
    color: "#B73A77",
    fontSize: 20
  },
  normalizeStyleDetails: {
    borderBottomWidth: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingTop: 0,
    justifyContent: 'center',
  },
  mainView: {
    flex: 1
  }
});
export default ListRecord;
