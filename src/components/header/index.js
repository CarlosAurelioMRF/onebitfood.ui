import '../../styles/header.scss';

import { Container, Navbar } from 'rbx';
import React from 'react';

import LogoImage from '../../assets/images/logo-v1-horizontal.png';

const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <img src={LogoImage} alt="One Bit Food" />
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;