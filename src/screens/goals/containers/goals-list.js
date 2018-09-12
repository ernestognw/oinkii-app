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

  deleteGoal = (goalID) => {
    this.selectedRow._root.closeWindow();
    this.props.actions.deleteGoal(goalID, this.props.userID);
    Alert.alert("Meta eliminada", 'La meta se eliminó exitosamente'); 
  }

  completeGoal = (goalID) => {
    if(this.props.data[goalID].quantity <= this.props.totalBalance){
      this.selectedRow._root.closeWindow();
      this.props.actions.completeGoal(this.props.data[goalID], this.props.userID);
      this.props.actions.addGoalToRecords(this.props.data[goalID], this.props.userID);
      this.props.actions.deleteGoal(goalID, this.props.userID);
      Alert.alert("¡Meta Completada!", "Te felicitamos por haberlo logrado. Ahora tu meta está en gastos")
    } else {
      Alert.alert("Aún no puedes completar esta meta", 'Todavía te falta ahorrar para completarla'); 
    }
  }

  openEditGoalsModal = (goalID) => {
    this.props.navigation.navigate('EditGoalsModal')
    this.props.actions.openEditGoalsModal(goalID);
    this.selectedRow._root.closeWindow();
  }

  render() {
    return (
      <List>
        {
          this.props.sortedGoalsIndex.length == 0 ? (
          <EmptyList 
            loaded={this.props.goalsDataLoaded}
            color={this.props.color}
            buttonAction={this.props.emptyButtonAction}
            message={this.props.emptyMessage}
          />
        ) : (
          this.props.sortedGoalsIndex.map((key, index) => {
            return (
              <SwipeRow
                ref={(c) => {this.component[index] = c }}
                key={index}
                leftOpenValue={75}
                rightOpenValue={-110}
                onRowOpen={() => {
                  if (this.selectedRow && this.selectedRow !== this.component[index]) { this.selectedRow._root.closeRow(); }
                  this.selectedRow = this.component[index]
                }}
                left={
                  <Button danger onPress={() => this.deleteGoal(key[0])}>
                    <Icon active type="MaterialIcons" name="close" />
                  </Button>
                }
                body={
                  <GoalRecord
                    quantity={this.props.data[key[0]].quantity}
                    description={this.props.data[key[0]].description}
                    dateToAccomplish={this.props.data[key[0]].dateToAccomplish}
                    totalBalance={this.props.totalBalance}
                    timeToAccomplish={this.props.data[key[0]].timeToAccomplish}
                  />
                }
                right={
                    <View style={styles.doubleButtonView}>
                      <Button info style={styles.doubleButton} onPress={() => this.openEditGoalsModal(key[0])}>
                        <Icon active type="MaterialIcons" name="edit" />
                      </Button>
                      <Button success style={styles.doubleButton} onPress={() => this.completeGoal(key[0])}>
                        <Icon active type="MaterialIcons" name="check" />
                      </Button>
                    </View>
                }
              />
            );
          })
        )}
      </List>
    );
  }
}

styles = StyleSheet.create({
  doubleButtonView: {
    flex: 1,
    flexDirection: "row"
  },
  doubleButton: {
    flex: 1,
    height: "100%"
  }
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    totalBalance: state.AppReducer.totalBalance,
    userID: state.AppReducer.userData.uid,
    editGoalsForm: state.AppReducer.editGoalForm,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
