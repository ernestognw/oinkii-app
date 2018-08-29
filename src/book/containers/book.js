import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../structure/main-card';
import { View } from 'react-native';

class Book extends Component {
  render() {
    return (
      <View>
        <MainCard 
          initialColor="#E0AB37"
          finalColor="#AA7A1A"
          title="Libro"
        />
        <Title padder>Detalles</Title>
      </View>
    )
  }
}

export default Book;