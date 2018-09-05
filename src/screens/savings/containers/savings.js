import React, { Component } from "react";
import { Title, View, Container, Content } from "native-base";
import { Text } from "react-native";
import MainList from "../../../structure/components/main-list";
import { connect } from "react-redux";
import HeaderLayout from "../../../structure/components/header-layout";
import AppLayout from "../../../structure/components/app-layout";
import MainCard from '../../../structure/components/main-card';

class Savings extends Component {
  addIncome = () => {
    this.props.navigation.navigate('IncomeModal')
  }

  addExpense = () => {
    this.props.navigation.navigate('ExpenseModal')
  }

  buttons = [
    {
      icon: "circle-with-minus",
      text: " GASTO",
      color: "red",
      buttonAction: this.addExpense
    },
    {
      icon: "circle-with-plus",
      text: " INGRESO",
      color: "green",
      buttonAction: this.addIncome
    },
  ]

  render() {
    return (
      <AppLayout>
        <MainCard
          initialColor="#6E4F94"
          finalColor="#402B60"
          title="Ahorros"
          value="900"
          buttons={this.buttons}
        />
        <Title padder>Detalles</Title>
        <MainList
          data={this.props.balanceData}
          userDataLoaded={this.props.userDataLoaded}
        />
      </AppLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceData: state.AppReducer.balanceData,
    balanceDataLoaded: state.AppReducer.balanceDataLoaded
  };
}

export default connect(mapStateToProps)(Savings);
