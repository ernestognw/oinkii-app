import React, { Component } from "react";
import { Title, View } from "native-base";
import { Text } from "react-native";
import MainCard from "../../structure/main-card";
import MainList from "../../structure/main-list";

class Savings extends Component {
  render() {
    return (
      <View>
        <MainCard
          initialColor="#6E4F94"
          finalColor="#402B60"
          title="Ahorros"
          value="$900"
        />
        <Title padder>Detalles</Title>
        <MainList />
      </View>
    );
  }
}

export default Savings;
