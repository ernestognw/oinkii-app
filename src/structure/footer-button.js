import React from "react";
import { Button, Icon } from 'native-base';
import { Text } from 'react-native';

function FooterButton(props) {
  styles = props.styles;
  return (
    <Button onPress={props.handleChangeRoute} vertical>
      <Icon name={props.iconName} style={props.active ? styles.active : styles.base} />
      <Text style={props.active ? styles.active : styles.base}>{props.name}</Text>
    </Button>
  );
}

export default FooterButton; 