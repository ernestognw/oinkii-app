import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../../../actions/actions";
import IncomeModal from "../components/income-modal";
import ExpenseModal from '../components/expense-modal';
import GoalsModal from "../components/goals-modal";
import { Text, Alert } from 'react-native';

class RecordModal extends Component {

  addIncome = () => {
    this.props.actions.addRecordAsync(this.props.incomeForm, this.props.userID);
    Alert.alert("Ingreso registrado ;)",'Tu ingreso ha sido registrado correctamente');    
    this.props.navigation.navigate('SwitchNavigator');
  }

  addExpense = () => {
    this.props.actions.addRecordAsync(this.props.expenseForm, this.props.userID);
    Alert.alert("Gasto registrado ;)", 'Tu gasto ha sido registrado correctamente'); 
    this.props.navigation.navigate('SwitchNavigator');
  }

  editRecord = () => {
    this.props.actions.editRecord(this.props.editForm, this.props.userID);
    Alert.alert("Editado correctamente", 'Tu registro se ha editado correctamente'); 
    this.props.navigation.navigate('SwitchNavigator');
  }

  addGoal = () => {
    // Pending...
  }

  handleIncomeInputChange = (value, name) => {
    this.props.actions.handleIncomeModalInputChange(value, name)
  }

  handleExpenseInputChange = (value, name) => {
    this.props.actions.handleExpenseModalInputChange(value, name)
  }

  handleEditInputChange = (value, name) => {
    this.props.actions.handleEditModalInputChange(value, name)
  }

  render(){
    return (
      this.props.routeName == 'IncomeModal' ?
      <IncomeModal 
        form={this.props.incomeForm}
        handleInputChange={this.handleIncomeInputChange}
        addIncome={this.addIncome}
      /> :  
      this.props.routeName == 'ExpenseModal' ?
      <ExpenseModal
        form={this.props.expenseForm}
        handleInputChange={this.handleExpenseInputChange}
        addExpense={this.addExpense}
      /> :
      this.props.routeName == 'EditIncomeModal' ?
      <IncomeModal
        form={this.props.editForm}
        handleInputChange={this.handleEditInputChange}
        addExpense={this.editRecord}
      /> :
      this.props.routeName == 'EditExpenseModal' ?
      <ExpenseModal
        form={this.props.editForm}
        handleInputChange={this.handleEditInputChange}
        addExpense={this.editRecord}
      /> :
      this.props.routeName == 'GoalModal' ?
      <GoalsModal /> : 
      null
  );
  }
}

function mapStateToProps (state) {
  return {
    routeName: state.nav.routes[1] ? state.nav.routes[1].routeName : '',
    incomeForm: state.AppReducer.incomeForm,
    expenseForm: state.AppReducer.expenseForm,
    editForm: state.AppReducer.editForm,
    userID: 't6enDM7jEvVBTvjihRVJUCogrhy1' // Provisional UID
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordModal);
