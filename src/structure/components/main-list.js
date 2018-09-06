import React, { Component } from "react";
import { Text, View, } from "react-native";
import ListRecord from "./list-record";
import EmptyList from './empty-list';
import { List } from 'native-base';

class MainList extends Component {
  render() {
    return (
      <List>
          {
            !this.props.sortedBalanceIndex ?
            <EmptyList 
              loaded={this.props.userDataLoaded}
            /> :
            this.props.sortedBalanceIndex.map((key, index) => {
              return (
              <ListRecord 
                key={index}
                quantity={this.props.data[key[0]].quantity}
                date={this.props.data[key[0]].date}
                hour={this.props.data[key[0]].hour}
                income={this.props.data[key[0]].income}
                description={this.props.data[key[0]].description}
              />
              ) 
            })
          }
      </List>
    );
  }
}

export default MainList;
