import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from "native-base";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

function IncomeModal(props) {
  return (
    <Container>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#6E4F94", "#402B60"]}
      >
        <View style={styles.mainView}>
          <View style={styles.card}>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
          </View>
          <Button style={styles.button} rounded light block>
            <Text>Registrar</Text>
          </Button>
        </View>
      </LinearGradient>
    </Container>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    height: 250,
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 0.3
  },
  button: {
    marginTop: 40
  }
});

export default IncomeModal;
