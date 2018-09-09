import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import ListRecord from "./list-record";
import EmptyList from "./empty-list";
import { List, Button, Icon, SwipeRow } from "native-base";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

class MainList extends Component {
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
        {!this.props.sortedBalanceIndex ? (
          <EmptyList loaded={this.props.userDataLoaded} />
        ) : (
          this.props.sortedBalanceIndex.map((key, index) => {
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
                  <Button info onPress={() => this.openEditModal(this.props.data[key[0]].income, this.props.data[key[0]].id)}>
                    <Icon active type="MaterialIcons" name="edit" />
                  </Button>
                }
                body={
                  <ListRecord
                    quantity={this.props.data[key[0]].quantity}
                    date={this.props.data[key[0]].date}
                    hour={this.props.data[key[0]].hour}
                    income={this.props.data[key[0]].income}
                    description={this.props.data[key[0]].description}
                  />
                }
                right={
                  <Button danger onPress={() => {this.deleteRecord(this.props.data[key[0]].id)}}>
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

export default connect(null, mapDispatchToProps)(MainList);
