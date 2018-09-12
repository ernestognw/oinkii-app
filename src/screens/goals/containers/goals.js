import React, { Component } from 'react';
import { Title } from 'native-base';
import MainCard from '../../savings/components/main-card';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import firebase from "react-native-firebase";
import AppLayout from '../../../structure/components/app-layout';
import GoalsList from './goals-list';
import * as actions from '../../../actions/actions';

class Goals extends Component {
  componentDidMount() {
    firebase.database().ref('/nativeApp/' + this.props.userID + '/goals').on('value', snapshot => {      
      this.props.actions.setGoalsData(snapshot.val())
    });
  }

  addGoal = () => {
    this.props.navigation.navigate("GoalsModal")
  }

  buttons = [
    {
      icon: "circle-with-plus",
      text: " META",
      color: "red",
      buttonAction: this.addGoal
    },
  ]

  render() {
    return (
      <AppLayout>
        <MainCard 
          initialColor="#65A4D2"
          finalColor="#3E799E"
          title="Metas"
          value="120"
          buttons={this.buttons}
          dataLoaded={this.props.goalsDataLoaded}
        />
        <Title padder>Lista de Metas</Title>
        <GoalsList 
          navigation={this.props.navigation}
          data={this.props.goalsData}
          goalsDataLoaded={this.props.goalsDataLoaded}
          sortedGoalsIndex={this.props.sortedGoalsIndex}
          color="#65A4D2"
          emptyButtonAction={this.addGoal}
          emptyMessage="Registra tu primer meta"
        />
      </AppLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    goalsData: state.AppReducer.goalsData,
    goalsDataLoaded: state.AppReducer.goalsDataLoaded,
    sortedGoalsIndex: state.AppReducer.sortedGoalsIndex,
    userID: state.AppReducer.userData.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals);