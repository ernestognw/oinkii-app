import React from "react";
import { Content, Container, View } from "native-base";
import HeaderLayout from './header-layout';

function AppLayout (props) {
  return (
    <Container>
      <HeaderLayout
        right={props.right}
      />
      <Content>
        {props.children}
      </Content>
    </Container>
  );
}

export default AppLayout;
  