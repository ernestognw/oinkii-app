import React, { Component } from "react";
import { Title } from "native-base";
import MainCard from "../../../structure/components/main-card";
import { View } from "react-native";
import AppLayout from "../../../structure/components/app-layout";
import { connect } from "react-redux";
import MainList from "../../../structure/components/main-list";
import firebase from "react-native-firebase";
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/actions'

class Incomes extends Component {
  componentDidMount() {
    firebase.database().ref('/nativeApp/t6enDM7jEvVBTvjihRVJUCogrhy1/balance').on('value', snapshot => {      
      this.props.actions.setBalanceData(snapshot.val())
    });
  }

  addIncome = () => {
    this.props.navigation.navigate('IncomeModal')
  }

  buttons = [
    {
      icon: "circle-with-plus",
      text: " INGRESO",
      buttonAction: this.addIncome
    }
  ]

  render() {

    var sortedIncomesList = []

    for (i = 0; i < this.props.sortedBalanceIndex.length; i++) {
      if (this.props.sortedBalanceIndex[i][2] == true) {
        sortedIncomesList.push(this.props.sortedBalanceIndex[i]);
      }
    }

    return (
      <AppLayout>
        <MainCard
          initialColor="#A1BE4F"
          finalColor="#7B8947"
          title="Ingresos"
          value={this.props.totalIncome}
          buttons={this.buttons}
        />
        <Title padder>Detalles</Title>
        <MainList
          data={this.props.balanceData}
          balanceDataLoaded={this.props.balanceDataLoaded}
          sortedBalanceIndex={sortedIncomesList}
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
    totalIncome: state.AppReducer.totalIncome,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Incomes);
