import React, { Component } from "react";
import { Title, View, Container, Content } from "native-base";
import { Text } from "react-native";
import MainList from "../../../structure/components/main-list";
import { connect } from "react-redux";
import HeaderLayout from "../../../structure/components/header-layout";
import AppLayout from "../../../structure/components/app-layout";
import MainCard from '../../../structure/components/main-card';

class Savings extends Component {
  render() {
    return (
      <AppLayout>
        <MainCard
          initialColor="#6E4F94"
          finalColor="#402B60"
          title="Ahorros"
          value="900"
        />
        <Title padder>Detalles</Title>
        <MainList
          data={this.props.userData}
          userDataLoaded={this.props.userDataLoaded}
        />
      </AppLayout>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.AppReducer);
  return {
    userData: state.AppReducer.userData,
    userDataLoaded: state.AppReducer.userDataLoaded
  };
}

export default connect(mapStateToProps)(Savings);