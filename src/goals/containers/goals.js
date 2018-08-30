import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../structure/main-card';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

class Goals extends Component {
  render() {
    return (
      <View>
        <MainCard 
          initialColor="#65A4D2"
          finalColor="#3E799E"
          title="Metas"
        />
        <Title padder>Detalles</Title>
      </View>
    )
  }
}

export default Goals;