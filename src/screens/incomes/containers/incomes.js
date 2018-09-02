import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../../structure/components/main-card';
import { View } from 'react-native';
import AppLayout from '../../../structure/components/app-layout';
import { connect } from 'react-redux';
import MainList from '../../../structure/components/main-list';

class Incomes extends Component {
  render() {
    var expensesList = []
    for (i = 0; i < this.props.userData.length; i++) {
      if (this.props.userData[i].income) {
        console.log(this.props.userData[i])
        expensesList.push(this.props.userData[i]);
      }
    }
    return (
      <AppLayout>
        <MainCard 
          initialColor="#A1BE4F"
          finalColor="#7B8947"
          title="Ingresos"
          value="500"
        />
        <Title padder>Detalles</Title>
        <MainList
          data={expensesList}
          userDataLoaded={this.props.userDataLoaded}
        />
      </AppLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.AppReducer.userData,
    userDataLoaded: state.AppReducer.userDataLoaded
  };
}

export default connect(mapStateToProps)(Incomes);