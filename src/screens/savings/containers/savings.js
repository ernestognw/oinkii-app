import React, { Component } from "react";
import { Title, View, Container, Content } from "native-base";
import { Text } from "react-native";
import MainList from "../../../structure/components/main-list";
import { connect } from "react-redux";
import HeaderLayout from "../../../structure/components/header-layout";
import AppLayout from "../../../structure/components/app-layout";
import MainCard from '../../../structure/components/main-card';
import firebase from "react-native-firebase"; // Eliminar
import store from '../../../redux/store';

class Savings extends Component {
  componentDidMount() {
    firebase.database().ref('/nativeApp/t6enDM7jEvVBTvjihRVJUCogrhy1/balance').once('value').then(function(snapshot) {
      var snap = snapshot.val();
      console.log(snap)
    });
    firebase.database().ref('/nativeApp/t6enDM7jEvVBTvjihRVJUCogrhy1/balance').on('value', function(snapshot) {
      var snap2 = snapshot.val();      
      store.dispatch({
        type: 'SET_BALANCE_DATA',
        payload: {
          balanceData: snap2,
        }
      })
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
          value="900"
          buttons={this.buttons}
        />
        <Title padder>Detalles</Title>
        <MainList
          data={this.props.balanceData}
          userDataLoaded={this.props.balanceDataLoaded}
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
