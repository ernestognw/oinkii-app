import React, { Component } from "react";
import { Title } from "native-base";
import { View } from "react-native";
import MainCard from '../../structure/main-card';

class Savings extends Component {
  render() {
    return (
      <View>
        <MainCard 
          initialColor="#6E4F94"
          finalColor="#402B60"
          title="Ahorros"
        />
        <Title padder>Detalles</Title>
      </View>
    );
  }
}

export default Savings;
