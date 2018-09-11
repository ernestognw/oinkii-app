import React from "react";
import { ListItem, Left, Body, Right, Icon, View } from "native-base";
import { Text, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';

function ListRecord(props) {
  let progress = 1;
  if (props.totalBalance < props.quantity){
    console.log('works')
    progress = props.totalBalance / props.quantity;
  }
  return (
    <View style={styles.mainView}>
      <ListItem avatar>
        <Left>
          <Icon
            type="MaterialIcons"
            name={"my-location"}
            style={styles.iconIncome}
          />
        </Left>
        <Body style={styles.normalizeStyleDetails}>
          <Text style={styles.description}>{props.description}</Text>
          <Progress.Bar 
            style={styles.progressBar}
            progress={progress} 
            indeterminate={false}
            borderRadius={2.8}
            height={3}
            borderWidth={0}
            width={null}
            unfilledColor="#eaeaea"
            color="#65A4D2"
          />
        </Body>
        <Right style={styles.normalizeStyleDetails}>
          <Text note style={styles.percentage}>{progress.toFixed(2) * 100}%</Text>
          <Text note style={styles.date}>
            {props.dateToAccomplish}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    marginTop: 10,
    fontSize: 10,
  },
  description: {
    fontWeight: "600",
    fontSize: 16,
  },
  iconIncome: {
    color: "#65A4D2",
    fontSize: 14,
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
    justifyContent: 'center'
  },
  mainView: {
    flex: 1
  },
  progressBar: {
    marginTop: 10,
    marginRight: 15,
  },
  percentage: {
    fontWeight: '600',
    fontSize: 14,
  }
});
export default ListRecord;
