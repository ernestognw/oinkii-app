import React, { Component } from "react";
import { Title } from "native-base";
import MainCard from "../../../structure/components/main-card";
import { View, Platform, ActivityIndicator, StyleSheet, Text } from "react-native";
import AppLayout from "../../../structure/components/app-layout";
import PDFView from "react-native-view-pdf";
import HeaderLayout from '../../../structure/components/header-layout';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/actions'
import { connect } from 'react-redux';

class Book extends Component {
  bookLoaded = () => {
    this.props.actions.bookLoaded();
  }

  render() {
    return (
      <View style={styles.mainView}>
        <HeaderLayout />
          {/* <View style={styles.numberContainer}>
            <ActivityIndicator size="large" color="#65A4D2"/>
          </View> */}
        <PDFView
            style={styles.mainView}
            onError={error => console.log("onError", error)}
            onLoad={this.bookLoaded}
            fadeInDuration={500}
            resource={
              Platform.OS = "ios" ? "edu-fin.pdf" : "/sdcard/Download/edu-fin.pdf"
            }
            resourceType="file"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

function mapStateToProps(state) {
  return {
    bookLoaded: state.AppReducer.bookLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
