import React, { Component } from "react";
import { Title } from "native-base";
import MainCard from "../../../structure/components/main-card";
import { View } from "react-native";
import AppLayout from "../../../structure/components/app-layout";
import MainList from "../../../structure/components/main-list";
import { connect } from "react-redux";

class Expenses extends Component {
  render() {
    var expensesList = []
    for (i = 0; i < this.props.userData.length; i++) {
      if (!this.props.userData[i].income) {
        console.log(this.props.userData[i])
        expensesList.push(this.props.userData[i]);
      }
    }
    return (
      <AppLayout>
        <MainCard 
          initialColor="#B73A77" 
          finalColor="#821D52" 
          title="Gastos" 
          value="400" 
        />
        <Title padder>Detalles</Title>
        <MainList
          data={expensesList}
          userDataLoaded={this.props.userDataLoaded}
        />
      </AppLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.AppReducer.userData,
    userDataLoaded: state.AppReducer.userDataLoaded
  };
}

export default connect(mapStateToProps)(Expenses);
