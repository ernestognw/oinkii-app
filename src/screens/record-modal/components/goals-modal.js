import React from "react";
import { Container, Text, Form, Item, Label, Input, Icon } from "native-base";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import ModalDatePicker from './modal-datepicker';

function GoalsModal(props) {
  return (
    <Container>
      <Form>
        <Item>
          <Icon type="MaterialIcons" name="subject" style={styles.buttonIcon} />
          <Input
            placeholder="Descripción de tu meta"
            onChangeText={value =>
              props.handleInputChange(value, "description")
            }
            value={props.form.description}
          />
        </Item>
        <ModalDatePicker
          color="#65A4D2"
          handleFormChange={value => props.handleInputChange(value, "date")}
          date={props.form.dateToAccomplish}
          placeholder="Fecha para lograr tu meta"
        />
        <Item>
          <Icon
            type="MaterialIcons"
            name="attach-money"
            style={styles.buttonIcon}
          />
          <Input
            placeholder="Costo de tu meta"
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
    backgroundColor: "#65A4D2",
    borderRadius: 5,
    width: "60%"
  },
  buttonLabel: {
    color: "white",
    padding: 14,
    fontWeight: "bold"
  },
  buttonIcon: {
    color: "#65A4D2",
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

export default GoalsModal;
