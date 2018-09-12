import React from "react";
import { ListItem, Left, Body, Right, Icon, View } from "native-base";
import { Text, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';

function ListRecord(props) {
  let progress = 1;
  let color="#A1BE4F"; // DEFAULT GREEN
  let timeLeft = 0;

  // Set wheel color
  if (props.totalBalance < props.quantity){
    progress = props.totalBalance / props.quantity;

    progress < 0.33 ?
      color = "#B73A77" :
    progress > 0.66 ?
      color = "#A1BE4F" :
      color = "#E0AB37"
  }

  // Set time left
  timeLeft = Math.ceil((props.timeToAccomplish - Date.now()) / 86400000)

  return (
    <View style={styles.mainView}>
      <ListItem avatar>
        <Left style={{}}>
          <Progress.Circle 
            size={45} 
            indeterminate={false} 
            progress={progress}
            showsText={true}
            formatText={() => (progress.toFixed(2) * 100).toFixed(0) + "%"} 
            color={color}
            unfilledColor="#eaeaea"
            borderWidth={0}
            strokeCap="round"
            textStyle={styles.textStyle}
          />
        </Left>
        <Body style={styles.normalizeStyleDetails}>
          <Text style={styles.description}>{props.description}</Text>
          {
            timeLeft > 0 ?
            <Text style={styles.timeLeft}>Falta{timeLeft > 1 ? "n" : null} {timeLeft} día{timeLeft > 1 ? "s" : null}</Text> :
            timeLeft == 0 ? 
            <Text style={styles.accomplishToday}>¡Tu meta expira hoy!</Text> :
            <Text style={styles.noTimeLeft}>Tiempo agotado</Text>
          }
        </Body>
        <Right style={styles.normalizeStyleDetails}>
          <Text style={styles.quantity}>${props.quantity}</Text>
          <Text style={styles.date}>{props.dateToAccomplish}</Text>
        </Right>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  accomplishToday: {
    fontWeight: '600',
    fontSize: 12,
    color: '#E0AB37' 
  },
  date: {
    fontSize: 10,
  },
  description: {
    fontWeight: "600",
    fontSize: 16,
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
  noTimeLeft: {
    fontWeight: '600',
    fontSize: 12,
    color: '#B73A77' 
  },
  timeLeft: {
    fontWeight: '600',
    fontSize: 12,
    color: '#65A4D2'
  },
  quantity: {
    fontWeight: '600',
    fontSize: 14,
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 10,
    color: 'black'
  }
});

export default ListRecord;
