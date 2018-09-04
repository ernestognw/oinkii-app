import React, { Component } from "react";
import { Title } from "native-base";
import MainCard from "../../../structure/components/main-card";
import { View } from "react-native";
import AppLayout from "../../../structure/components/app-layout";
import MainList from "../../../structure/components/main-list";
import { connect } from "react-redux";

class Expenses extends Component {

  buttons = [
    {
      icon: "circle-with-minus",
      text: " GASTO",
      buttonAction: this.addExpense
    }
  ]

  render() {

    var expensesList = []
    for (i = 0; i < this.props.balanceData.length; i++) {
      if (!this.props.balanceData[i].income) {
        expensesList.push(this.props.balanceData[i]);
      }
    }
    
    return (
      <AppLayout>
        <MainCard 
          initialColor="#B73A77" 
          finalColor="#821D52" 
          title="Gastos" 
          value="400" 
          buttons={this.buttons}
        />
        <Title padder>Detalles</Title>
        <MainList
          data={expensesList}
          balanceDataLoaded={this.props.balanceDataLoaded}
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

export default connect(mapStateToProps)(Expenses);
