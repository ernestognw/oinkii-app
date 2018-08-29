import React from "react";
import { Footer, FooterTab, Button, Icon } from "native-base";
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import FooterButton from './footer-button';

function FooterLayout(props) {
  return (
    <Footer>
      <FooterTab>
        <FooterButton
          iconName="chart"
          styles={styles}
          active={props.selected == 'incomes' ? true : false}
          name="Ingresos"
          handleChangeRoute={props.handleChangeIncomes}
        />
        <FooterButton
          iconName="tag"
          styles={styles}
          active={props.selected == 'expenses' ? true : false}
          name="Gastos"
          handleChangeRoute={props.handleChangeExpenses}
        />
        <FooterButton
          iconName="wallet"
          styles={styles}
          active={props.selected == 'savings' ? true : false}
          name="Ahorro"
          handleChangeRoute={props.handleChangeSavings}          
        />
        <FooterButton
          iconName="star"
          styles={styles}
          active={props.selected == 'goals' ? true : false}
          name="Metas"
          handleChangeRoute={props.handleChangeGoals}
        />
        <FooterButton
          iconName="book-open"
          styles={styles}
          active={props.selected == 'book' ? true : false}
          name="Libro"
          handleChangeRoute={props.handleChangeBook}
        />
      </FooterTab>
    </Footer>
  );
}

const styles = StyleSheet.create({
  base: {
    color: 'black',
  },
  active: {
    color: 'purple'
  },
});

export default FooterLayout;