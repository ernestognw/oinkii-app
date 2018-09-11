import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation";
import { Icon } from "native-base";
import AppLayout from "./structure/components/app-layout";
import Expenses from "./screens/expenses/containers/expenses";
import Savings from "./screens/savings/containers/savings";
import Incomes from "./screens/incomes/containers/incomes";
import Goals from "./screens/goals/containers/goals";
import Book from "./screens/book/containers/book";
import HeaderLayout from './structure/components/header-layout';
import Login from './screens/login/containers/login';
import Loading from "./screens/login/containers/loading";
import recordModal from './screens/record-modal/container/record-modal';

const TabNavigator = createBottomTabNavigator(
  {
    Incomes: {
      screen: Incomes,
      navigationOptions: {
        title: "Ingresos",
        tabBarIcon: props => (
          <Icon name="chart" style={{ color: props.tintColor }} />
        )
      }
    },
    Expenses: {
      screen: Expenses,
      navigationOptions: {
        title: "Gastos",
        tabBarIcon: props => (
          <Icon name="tag" style={{ color: props.tintColor }} />
        )
      }
    },
    Savings: {
      screen: Savings,
      navigationOptions: {
        title: "Mi Dinero",
        tabBarIcon: props => (
          <Icon name="wallet" style={{ color: props.tintColor }} />
        )
      }
    },
    Goals: {
      screen: Goals,
      navigationOptions: {
        title: "Metas",
        tabBarIcon: props => (
          <Icon name="star" style={{ color: props.tintColor }} />
        )
      }
    },
    Book: {
      screen: Book,
      navigationOptions: {
        title: "Libro",
        tabBarIcon: props => (
          <Icon name="book-open" style={{ color: props.tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: "Savings",
    header: HeaderLayout,
    tabBarOptions: {
      activeTintColor: "#6E4F94",
      inactiveTintColor: "#000000",
      labelStyle: {
        fontSize: 8
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    App: TabNavigator,
    Login: Login,
    Loading: Loading,
  },
  {
    initialRouteName: 'Loading',
  }
);

const ModalsNavigator = createStackNavigator(
  {
    SwitchNavigator: {
      screen: SwitchNavigator,
      navigationOptions: {
        header: null,
      }
    },
    IncomeModal: {
      screen: recordModal,
      navigationOptions: {
        title: 'Nuevo ingreso',
        headerStyle: {
          backgroundColor: '#A1BE4F',
          height: 130,
        }
      }
    },
    EditIncomeModal: {
      screen: recordModal,
      navigationOptions: {
        title: 'Editar ingreso',
        headerStyle: {
          backgroundColor: '#A1BE4F',
          height: 130,
        }
      }
    },
    ExpenseModal: {
      screen: recordModal,
      navigationOptions: {
        title: 'Nuevo gasto',
        headerStyle: {
          backgroundColor: '#B73A77',
          height: 130,
        }
      }
    },
    EditExpenseModal: {
      screen: recordModal,
      navigationOptions: {
        title: 'Editar gasto',
        headerStyle: {
          backgroundColor: '#B73A77',
          height: 130,
        }
      }
    },
  },
  {
    initialRouteName: 'SwitchNavigator',
    mode: 'modal',
    cardStyle: {
      backgroundColor: 'white',
    },
    navigationOptions : {
      headerBackImage: <Icon name="close" style={{color: 'white', paddingLeft: 30}} type="MaterialIcons"/>,
      headerTitleStyle: {
        color: 'white',
        fontSize: 22,
      },
    }
  }
)

export default ModalsNavigator;
