import React from "react";
import { Content, Container } from "native-base";
import HeaderLayout from './header-layout';

function AppLayout (props) {
  return (
    <Container>
      <HeaderLayout />
      <Content>
        {props.children}
      </Content>
    </Container>
  );
}

export default AppLayout;
  