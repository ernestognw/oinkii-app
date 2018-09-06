import React, { Component } from "react";
import { Title } from "native-base";
import MainCard from "../../../structure/components/main-card";
import { View } from "react-native";
import AppLayout from "../../../structure/components/app-layout";
import MainList from "../../../structure/components/main-list";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/actions';

class Expenses extends Component {
  componentDidMount() {
    firebase.database().ref('/nativeApp/t6enDM7jEvVBTvjihRVJUCogrhy1/balance').on('value', snapshot => {      
      this.props.actions.setBalanceData(snapshot.val())
    });
  }

  addExpense = () => {
    this.props.navigation.navigate('ExpenseModal')
  }

  buttons = [
    {
      icon: "circle-with-minus",
      text: " GASTO",
      buttonAction: this.addExpense
    }
  ]

  render() {

    var sortedExpensesList = []

    for (i = 0; i < this.props.sortedBalanceIndex.length; i++) {
      if (!this.props.sortedBalanceIndex[i][2] == true) {
        sortedExpensesList.push(this.props.sortedBalanceIndex[i]);
      }
    }
    
    return (
      <AppLayout>
        <MainCard 
          initialColor="#B73A77" 
          finalColor="#821D52" 
          title="Gastos" 
          value={this.props.totalExpense} 
          buttons={this.buttons}
        />
        <Title padder>Detalles</Title>
        <MainList
          data={this.props.balanceData}
          balanceDataLoaded={this.props.balanceDataLoaded}
          sortedBalanceIndex={sortedExpensesList}
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
    totalExpense: state.AppReducer.totalExpense,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
