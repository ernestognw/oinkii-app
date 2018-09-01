import React, { Component } from "react";
import { Content, Text, Container } from "native-base";
import HeaderLayout from './structure/header-layout';
import FooterLayout from './structure/footer-layout';
import Savings from './savings/containers/savings';
import Expenses from './expenses/containers/expenses';
import Incomes from './incomes/containers/incomes';
import Goals from "./goals/containers/goals";
import Book from './book/containers/book';
import { connect } from 'react-redux';
import store from './redux/store'
import fakeApi from './redux/fake-api';

class AppLayout extends Component {
  
  handleChangeIncomes = () => {
    store.dispatch({
      type: 'SET_ROUTE_INCOMES'
    })
  }
  
  handleChangeExpenses = () => {
    store.dispatch({
      type: 'SET_ROUTE_EXPENSES'
    })
  }
  
  handleChangeSavings = () => {
    store.dispatch({
      type: 'SET_ROUTE_SAVINGS'
    })
  }
  
  handleChangeGoals = () => {
    store.dispatch({
      type: 'SET_ROUTE_GOALS'
    })
  }

  handleChangeBook = () => {
    store.dispatch({
      type: 'SET_ROUTE_BOOK'
    })
  }

  render() {
    return (
      <Container>
        <HeaderLayout/>
        <Content>
          {
            this.props.selected == 'incomes' ? 
            <Incomes /> :
            this.props.selected == 'expenses' ? 
            <Expenses /> :
            this.props.selected == 'savings' ?
            <Savings /> :
            this.props.selected == 'goals' ? 
            <Goals /> :
            this.props.selected == 'book' ?
            <Book /> : ''
          }
        </Content>
        <FooterLayout
          handleChangeIncomes={this.handleChangeIncomes}
          handleChangeExpenses={this.handleChangeExpenses}
          handleChangeSavings={this.handleChangeSavings}
          handleChangeGoals={this.handleChangeGoals}
          handleChangeBook={this.handleChangeBook}
          selected={this.props.selected}
        />
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    selected: state.selected,
  }
}

export default connect(mapStateToProps)(AppLayout);
