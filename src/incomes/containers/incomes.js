import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../structure/main-card';
import { View } from 'react-native';

class Incomes extends Component {
  render() {
    return (
      <View>
        <MainCard 
          initialColor="#A1BE4F"
          finalColor="#7B8947"
          title="Ingresos"
        />
        <Title padder>Detalles</Title>
      </View>
    )
  }
}

export default Incomes;