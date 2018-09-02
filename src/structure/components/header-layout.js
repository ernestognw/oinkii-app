import React from "react";
import { Button, Left, Header, Icon, Right, Body } from "native-base";
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

function HeaderLayout(props) {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("Expenses")}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
      <Image 
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      </Body>
      <Right />
    </Header>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: '80%',
    resizeMode: 'contain',
    justifyContent:'center',
  }
})

export default HeaderLayout;
