import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../../../actions/actions";
import IncomeModal from "../components/income-modal";
import ExpenseModal from '../components/expense-modal';
import GoalsModal from "../components/goals-modal";
import { Text } from 'react-native';

class RecordModal extends Component {

  addIncome = () => {
    this.props.actions.addIncome();
  }

  addExpense = () => {
    
  }

  addGoal = () => {
    // Pending...
  }

  handleIncomeInputChange = {
    handleDescriptionChange: value => {
      this.props.actions.handleModalInputChange(value, 'income', 'description')
    },
    handleDateChange: value => {
      this.props.actions.handleModalInputChange(value, 'income', 'date')
    },
    handleHourChange: value => {
      this.props.actions.handleModalInputChange(value, 'income', 'hour')      
    },
    handleQuantityChange: value => {
      this.props.actions.handleModalInputChange(value, 'income', 'quantity')
    },
  }

  handleExpenseInputChange = {
    handleDescriptionChange: value => {
      this.props.actions.handleModalInputChange(value, 'expense', 'description')
    },
    handleDateChange: value => {
      this.props.actions.handleModalInputChange(value, 'expense', 'date')
    },
    handleHourChange: value => {
      this.props.actions.handleModalInputChange(value, 'expense', 'hour')      
    },
    handleQuantityChange: value => {
      this.props.actions.handleModalInputChange(value, 'expense', 'quantity')
    },
  }

  render(){
    return (
      this.props.routeName == 'IncomeModal' ?
      <IncomeModal 
        form={this.props.incomeForm}
        handleFormChange={this.handleIncomeInputChange}
      /> :
      this.props.routeName == 'ExpenseModal' ?
      <ExpenseModal
        form={this.props.expenseForm}
        handleFormChange={this.handleExpenseInputChange}
      /> :
      this.props.routeName == 'GoalModal' ?
      <GoalsModal /> : 
      <Text>Loading...</Text>
  );
  }
}

function mapStateToProps (state) {
  console.log(state.nav.routes[1].routeName)
  return {
    routeName: state.nav.routes[1].routeName,
    incomeForm: state.AppReducer.incomeForm,
    expenseForm: state.AppReducer.expenseForm,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordModal);
