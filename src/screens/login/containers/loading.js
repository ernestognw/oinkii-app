import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingLayout from '../components/loading-layout';

class Loading extends Component {
  componentDidMount() {
    if(this.props.user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return <LoadingLayout />
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Loading)