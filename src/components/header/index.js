import '../../styles/header.scss';

import { Container, Navbar } from 'rbx';
import React from 'react';

import LogoImage from '../../assets/images/logo-v1-horizontal.png';
import SearchBox from '../search_box_component';

const Header = () => (
  <div class="top-navbar">
    <Container>
      <Navbar>
        <Navbar.Brand>
          <img src={LogoImage} alt="One Bit Food" />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Segment as="div" class="navbar-item navbar-center">
            <SearchBox />
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
);

export default Header;