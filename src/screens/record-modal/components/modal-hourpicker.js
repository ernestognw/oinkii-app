import React from "react";
import { Icon } from "native-base";
import DatePicker from "react-native-datepicker";
import { View, StyleSheet } from "react-native";

function ModalHourpicker(props) {
  return (
    <View style={styles.datePicker}>
      <Icon type="MaterialIcons" name="timer" style={{...styles.buttonIcon, color: props.color}} />
      <DatePicker
        date={props.hour}
        mode="time"
        placeholder="Hora"
        format="hh:mm a"
        confirmBtnText="Ok"
        minuteInterval={5}
        showIcon={false}
        cancelBtnText="Cancelar"
        customStyles={{
          dateInput: {
            borderWidth: 0,
            height: "100%",
            padding: 0,
            justifyContent: "flex-end",
            alignItems: "flex-start"
          },
          dateText: {
            fontSize: 17,
            color: "black",
            paddingBottom: 7,
            paddingLeft: null,
            paddingRight: 5,
            paddingTop: 3,
            marginLeft: 6,
          },
          placeholderText: {
            fontSize: 17,
            color: "#575757",
            paddingBottom: 7,
            paddingLeft: null,
            paddingRight: 5,
            paddingTop: 3,
            marginLeft: 6,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={props.handleFormChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    marginBottom: 5,
    fontSize: 20,
    paddingRight: 8,
    paddingTop: 8,
    top: 6
  },
  datePicker: {
    borderBottomWidth: 1,
    marginLeft: 15,
    marginTop: 15,
    borderColor: "#D9D5DC",
    flexDirection: "row"
  }
});

export default ModalHourpicker;
