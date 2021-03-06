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
    if (
      this.props.incomeForm.description != "" &&
      this.props.incomeForm.date != "" &&
      this.props.incomeForm.hour != "" &&
      this.props.incomeForm.quantity != ""
    ) {
      this.props.actions.addRecordAsync(this.props.incomeForm, this.props.userID);
      Alert.alert("Ingreso registrado ;)",'Tu ingreso ha sido registrado correctamente');    
      this.props.navigation.navigate('SwitchNavigator');
    } else {
      Alert.alert("Completa los campos", "Para poder registrar un ingreso, debes llenar los campos");
    }
  }

  addExpense = () => {
    if (
      this.props.expenseForm.description != "" &&
      this.props.expenseForm.date != "" &&
      this.props.expenseForm.hour != "" &&
      this.props.expenseForm.quantity != ""
    ) {
      if(this.props.expenseForm.quantity <= this.props.totalBalance){
        this.props.actions.addRecordAsync(this.props.expenseForm, this.props.userID);
        Alert.alert("Gasto registrado ;)", 'Tu gasto ha sido registrado correctamente'); 
        this.props.navigation.navigate('SwitchNavigator');
      } else {
        Alert.alert("¡Cuidado!", "No puedes gastar dinero que no tienes. Revisa tu gasto.");
        this.props.navigation.navigate('SwitchNavigator');
      }
    } else {
      Alert.alert("Completa los campos", "Para poder registrar un gasto, debes llenar los campos");
    }
  }

  editRecord = () => {
    if (
      this.props.editRecordForm.description != "" &&
      this.props.editRecordForm.date != "" &&
      this.props.editRecordForm.hour != "" &&
      this.props.editRecordForm.quantity != ""
    ){
      this.props.actions.editRecord(this.props.editRecordForm, this.props.userID);
      Alert.alert("Editado correctamente", 'Tu registro se ha editado correctamente'); 
      this.props.navigation.navigate('SwitchNavigator');
    } else {
      Alert.alert("Completa los campos", "Para poder editar un registro, debes llenar los campos");
    }
  }

  addGoal = () => {
    if (
      this.props.goalsForm.description != "" &&
      this.props.goalsForm.dateToAccomplish != "" &&
      this.props.goalsForm.quantity != ""
    ){
      this.props.actions.addGoalAsync(this.props.goalsForm, this.props.userID)
      Alert.alert("Meta registrada ;)", 'Tu meta ha sido registrada correctamente'); 
      this.props.navigation.navigate('SwitchNavigator');
    } else {
      Alert.alert("Completa los campos", "Para poder añadir una meta, debes llenar los campos");
    }
  }

  editGoal = () => {
    if (
      this.props.editGoalsForm.description != "" &&
      this.props.editGoalsForm.dateToAccomplish != "" &&
      this.props.editGoalsForm.quantity != ""
    ){
      this.props.actions.editGoal(this.props.editGoalsForm, this.props.userID);
      Alert.alert("Editado correctamente", 'Tu meta se ha editado correctamente'); 
      this.props.navigation.navigate('SwitchNavigator');
    } else {
      Alert.alert("Completa los campos", "Para poder editar una meta, debes llenar los campos");
    }
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

  handleGoalsInputChange = (value, name) => {
    this.props.actions.handleGoalsModalInputChange(value, name)
  }

  handleEditGoalsInputChange = (value, name) => {
    this.props.actions.handleEditGoalsModalInputChange(value, name)
  }

  render(){
    return (
      this.props.routeName == 'IncomeModal' ?
      <IncomeModal 
        form={this.props.incomeForm}
        handleInputChange={this.handleIncomeInputChange}
        buttonAction={this.addIncome}
      /> :  
      this.props.routeName == 'ExpenseModal' ?
      <ExpenseModal
        form={this.props.expenseForm}
        handleInputChange={this.handleExpenseInputChange}
        buttonAction={this.addExpense}
      /> :
      this.props.routeName == 'EditIncomeModal' ?
      <IncomeModal
        form={this.props.editRecordForm}
        handleInputChange={this.handleEditInputChange}
        buttonAction={this.editRecord}
      /> :
      this.props.routeName == 'EditExpenseModal' ?
      <ExpenseModal
        form={this.props.editRecordForm}
        handleInputChange={this.handleEditInputChange}
        buttonAction={this.editRecord}
      /> :
      this.props.routeName == 'GoalsModal' ?
      <GoalsModal 
        form={this.props.goalsForm}
        handleInputChange={this.handleGoalsInputChange}
        buttonAction={this.addGoal}
      /> : 
      this.props.routeName == 'EditGoalsModal' ?
      <GoalsModal 
        form={this.props.editGoalsForm}
        handleInputChange={this.handleEditGoalsInputChange}
        buttonAction={this.editGoal}
      /> :
      null
  );
  }
}

function mapStateToProps (state) {
  return {
    routeName: state.nav.routes[1] ? state.nav.routes[1].routeName : '',
    incomeForm: state.AppReducer.incomeForm,
    expenseForm: state.AppReducer.expenseForm,
    editRecordForm: state.AppReducer.editRecordForm,
    goalsForm: state.AppReducer.goalsForm,
    editGoalsForm: state.AppReducer.editGoalsForm,
    totalBalance: state.AppReducer.totalBalance,
    userID: state.AppReducer.userData.uid,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordModal);
