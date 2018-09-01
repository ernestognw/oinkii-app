import React, { Component } from "react";
import { Icon, Right, Content, Left, List, ListItem, Body } from "native-base";
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import ListRecord from "./list-record";

class MainList extends Component {
  renderItem = ({ item }) => {
    return <ListRecord {...item} />;
  };

  keyExtractor = (item, index) => index.toString();

  renderEmpty = () => (
    <View style={styles.emptyView}>
    { 
      this.props.userDataLoading ? 
      <ActivityIndicator size="small" color="#65A4D2" /> :
      <Text>Por ahora no tienes registros :(</Text>
    }
    </View>
  );

  render() {
    return (
      <List>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.userData}
            ListEmptyComponent={this.renderEmpty}
            renderItem={this.renderItem}
          />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  emptyView: {
    marginTop: 40,
    alignItems: "center",
  }
});

export default MainList;
