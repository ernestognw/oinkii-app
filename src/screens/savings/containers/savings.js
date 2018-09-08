import React, { Component } from "react";
import { Title, View, Container, Content } from "native-base";
import { Text } from "react-native";
import { connect } from "react-redux";
import HeaderLayout from "../../../structure/components/header-layout";
import AppLayout from "../../../structure/components/app-layout";
import firebase from "react-native-firebase";
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/actions'
import MainList from '../components/main-list';
import MainCard from '../components/main-card';

class Savings extends Component {
  componentDidMount() {
    firebase.database().ref('/nativeApp/t6enDM7jEvVBTvjihRVJUCogrhy1/balance').on('value', snapshot => {      
      this.props.actions.setBalanceData(snapshot.val())
    });
  }

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
          value={this.props.totalBalance}
          buttons={this.buttons}
        />
        <Title padder>Detalles</Title>
        <MainList
          data={this.props.balanceData}
          userDataLoaded={this.props.balanceDataLoaded}
          sortedBalanceIndex={this.props.sortedBalanceIndex}
        />
      </AppLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceData: state.AppReducer.balanceData,
    balanceDataLoaded: state.AppReducer.balanceDataLoaded,
    sortedBalanceIndex: state.AppReducer.sortedBalanceIndex,
    totalBalance: state.AppReducer.totalBalance,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Savings);
  