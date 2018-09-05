import React from "react";
import {
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Icon
} from "native-base";
import { View, TouchableOpacity, StyleSheet } from "react-native";

function Expense(props) {
  return (
    <Container>
      <Form>
        <Item floatingLabel>
          <Icon type="MaterialIcons" name="subject" style={styles.buttonIcon} />
          <Label>Descripción</Label>
          <Input 
            onChangeText={props.handleFormChange.handleDescriptionChange}
            value={props.form.description}
          />
        </Item>
        <Item floatingLabel>
          <Icon
            type="MaterialIcons"
            name="date-range"
            style={styles.buttonIcon}
          />
          <Label>Fecha</Label>
          <Input 
            onChangeText={props.handleFormChange.handleDateChange}
            value={props.form.date}
          />
        </Item>
        <Item floatingLabel>
          <Icon
            type="MaterialIcons"
            name="timer"
            style={styles.buttonIcon}
          />
          <Label>Hora</Label>
          <Input 
            onChangeText={props.handleFormChange.handleHourChange}
            name="meta"
            value={props.form.hour}
          />
        </Item>
        <Item floatingLabel>
          <Icon
            type="MaterialIcons"
            name="attach-money"
            style={styles.buttonIcon}
          />
          <Label>Cantidad</Label>
          <Input 
            onChangeText={props.handleFormChange.handleQuantityChange}
            style={styles.numberInput}
            keyboardType="number-pad" 
            value={props.form.quantity}
          />
        </Item>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
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
    fontSize: 20
  },
  numberInput: {
    fontSize: 30,
    height: 80,
  }
});

export default Expense;