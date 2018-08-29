import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../structure/main-card';
import { View } from 'react-native';

class Expenses extends Component {
  render() {
    return (
      <View>
        <MainCard 
          initialColor="#B73A77"
          finalColor="#821D52"
          title="Gastos"
        />
        <Title padder>Detalles</Title>
      </View>
    )
  }
}

export default Expenses;