import React, { Component } from "react";
import { Content, Text, Container } from "native-base";
import HeaderLayout from './structure/header-layout';
import FooterLayout from './structure/footer-layout';
import Savings from './savings/containers/savings';
import Expenses from './expenses/containers/expenses';
import Incomes from './incomes/containers/incomes';
import Goals from "./goals/containers/goals";
import Book from './book/containers/book';

class AppLayout extends Component {
  state = {
    selected: 'savings'
  }

  handleChangeIncomes = event => {
    this.setState({
      selected: 'incomes'
    })
  }
  
  handleChangeExpenses = event => {
    this.setState({
      selected: 'expenses'
    })
  }
  
  handleChangeSavings = event => {
    this.setState({
      selected: 'savings'
    })
  }
  
  handleChangeGoals = event => {
    this.setState({
      selected: 'goals'
    })
  }

  handleChangeBook = event => {
    this.setState({
      selected: 'book'
    })
  }

  render() {
    return (
      <Container>
        <HeaderLayout/>
        <Content>
          {
            this.state.selected == 'incomes' ? 
            <Incomes /> :
            this.state.selected == 'expenses' ? 
            <Expenses /> :
            this.state.selected == 'savings' ?
            <Savings /> :
            this.state.selected == 'goals' ? 
            <Goals /> :
            this.state.selected == 'book' ?
            <Book /> : ''
          }
        </Content>
        <FooterLayout
          handleChangeIncomes={this.handleChangeIncomes}
          handleChangeExpenses={this.handleChangeExpenses}
          handleChangeSavings={this.handleChangeSavings}
          handleChangeGoals={this.handleChangeGoals}
          handleChangeBook={this.handleChangeBook}
          selected={this.state.selected}
        />
      </Container>
    );
  }
}

export default AppLayout;
