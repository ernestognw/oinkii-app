import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import GoalRecord from "../components/goal-record";
import { List, Button, Icon, SwipeRow } from "native-base";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';
import EmptyList from '../../savings/components/empty-list';

class GoalsList extends Component {
  constructor(props){
    super(props)
    this.component = [];
    this.selectedRow;
  }

  deleteRecord = (recordID) => {
    this.selectedRow._root.closeWindow();
    this.props.actions.deleteRecord(recordID, "t6enDM7jEvVBTvjihRVJUCogrhy1");
    Alert.alert("Elemento eliminado", 'El registro se eliminó exitosamente'); 
  }

  openEditModal = (isIncome, recordID) => {
    isIncome ?
    this.props.navigation.navigate('EditIncomeModal') :
    this.props.navigation.navigate('EditExpenseModal')
    this.props.actions.openEditModal(recordID);
    this.selectedRow._root.closeWindow();
  }

  render() {
    return (
      <List>
        {!this.props.sortedGoalsIndex ? (
          <EmptyList loaded={this.props.userDataLoaded} />
        ) : (
          this.props.sortedGoalsIndex.map((key, index) => {
            return (
              <SwipeRow
                ref={(c) => {this.component[index] = c }}
                key={index}
                leftOpenValue={75}
                rightOpenValue={-75}
                onRowOpen={() => {
                  if (this.selectedRow && this.selectedRow !== this.component[index]) { this.selectedRow._root.closeRow(); }
                  this.selectedRow = this.component[index]
                }}
                left={
                  <Button info onPress={() => alert('Open Left')}>
                    <Icon active type="MaterialIcons" name="edit" />
                  </Button>
                }
                body={
                  <GoalRecord
                    quantity={this.props.data[key[0]].quantity}
                    description={this.props.data[key[0]].description}
                    dateToAccomplish={this.props.data[key[0]].dateToAccomplish}
                    totalBalance={this.props.totalBalance}
                  />
                }
                right={
                  <Button danger onPress={() => {alert('Open Right')}}>
                    <Icon active type="MaterialIcons" name="close" />
                  </Button>
                }
              />
            );
          })
        )}
      </List>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    totalBalance: state.AppReducer.totalBalance,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
