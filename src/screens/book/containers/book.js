import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../../structure/components/main-card';
import { View } from 'react-native';
import AppLayout from '../../../structure/components/app-layout';

class Book extends Component {
  render() {
    return (
      <AppLayout>
        <MainCard 
          initialColor="#E0AB37"
          finalColor="#AA7A1A"
          title="Libro"
        />
        <Title padder>Detalles</Title>
      </AppLayout>
    )
  }
}

export default Book;