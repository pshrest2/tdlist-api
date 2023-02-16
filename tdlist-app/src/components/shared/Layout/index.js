import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => (
  <Container className="layout-container">{children}</Container>
);

export default Layout;
