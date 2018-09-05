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
            !this.props.data ?
            <EmptyList 
              loaded={this.props.userDataLoaded}
            /> :
            Object.keys(this.props.data).map((key, index) => {
              return (
              <ListRecord 
                key={index}
                quantity={this.props.data[key].quantity}
                date={this.props.data[key].date}
                hour={this.props.data[key].hour}
                income={this.props.data[key].income}
                description={this.props.data[key].description}
              />
              ) 
            })
          }
      </List>
    );
  }
}

export default MainList;
