import React, { Component } from "react";
import { Icon, Right, Content, Left, List, ListItem, Body } from "native-base";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ListRecord from "./list-record";

var fakeRecords = [
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  },
  {
    quantity: "500",
    description: "Ingreso con descripción",
    income: true,
    hour: "3:43 pm"
  },
  {
    quantity: "400",
    description: "Gasto con descripción",
    income: false,
    hour: "3:43 pm"
  }
];

class MainList extends Component {
  renderItem = ({ item }) => {
    return <ListRecord {...item} />;
  };

  keyExtractor = (item, index) => index.toString();
  renderEmpty = () => (
    <Text style={styles.emptyText}>Por ahora no tienes registros :(</Text>
  );

  render() {
    return (
      <View>
        <List>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={fakeRecords}
            ListEmptyComponent={this.renderEmpty}
            renderItem={this.renderItem}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16
  }
});

export default MainList;
