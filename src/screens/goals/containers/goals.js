import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../../structure/components/main-card';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import AppLayout from '../../../structure/components/app-layout';

class Goals extends Component {
  render() {
    return (
      <AppLayout>
        <MainCard 
          initialColor="#65A4D2"
          finalColor="#3E799E"
          title="Metas"
        />
        <Title padder>Detalles</Title>
      </AppLayout>
    )
  }
}

export default Goals;