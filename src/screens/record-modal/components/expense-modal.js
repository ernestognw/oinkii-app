import React from "react";
import { Container, Text, Form, Item, Label, Input, Icon } from "native-base";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import ModalDatePicker from './modal-datepicker';
import ModalHourpicker from './modal-hourpicker';

function IncomeModal(props) {
  return (
    <Container>
      <Form>
        <Item>
          <Icon type="MaterialIcons" name="subject" style={styles.buttonIcon} />
          <Input
            placeholder="Descripción"
            onChangeText={value => props.handleInputChange(value, "description")}
            value={props.form.description}
          />
        </Item>
        <ModalDatePicker
          color="#B73A77"
          handleFormChange={value => props.handleInputChange(value, "date")}
          date={props.form.date}
          placeholder="Fecha"
        />
        <ModalHourpicker 
          color="#B73A77"
          handleFormChange={value => props.handleInputChange(value, "hour")}
          hour={props.form.hour}
        />
        <Item>
          <Icon
            type="MaterialIcons"
            name="attach-money"
            style={styles.buttonIcon}
          />
          <Input
            placeholder="Cantidad"
            onChangeText={value => props.handleInputChange(value, "quantity")}
            style={styles.numberInput}
            keyboardType="numeric"
            value={props.form.quantity}
          />
        </Item>
        <View style={styles.container}>
          <TouchableOpacity onPress={props.buttonAction} style={styles.button}>
            <Text style={styles.buttonLabel}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  button: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B73A77",
    borderRadius: 5,
    width: "60%"
  },
  buttonLabel: {
    color: "white",
    padding: 14,
    fontWeight: "bold"
  },
  buttonIcon: {
    color: "#B73A77",
    marginBottom: 5,
    fontSize: 20,
    paddingRight: 8,
    paddingTop: 8, 
    top: 6,
  },
  numberInput: {
    fontSize: 30,
    height: 80
  }
});

export default IncomeModal;
