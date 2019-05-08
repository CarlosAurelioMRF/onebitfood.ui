import '../../styles/header.scss';

import { Container, Icon, Navbar } from 'rbx';
import React from 'react';
import { FaCrosshairs, FaShoppingBasket } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showModal } from '../../actions/modal';
import LogoImage from '../../assets/images/logo-v1-horizontal.png';
import history from '../../history';
import SearchBox from '../search_box_component';

const Header = (props) => (
  <div className="top-navbar">
    <Container>
      <Navbar>
        <Navbar.Brand onClick={e => history.push('/')}>
          <img src={LogoImage} alt="One Bit Food" />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Segment as="div" align="start" className="navbar-item navbar-center">
            <SearchBox />
          </Navbar.Segment>
          <Navbar.Segment as="div" align="end">
            <Navbar.Item onClick={() => props.showModal('ADDRESS_MODAL')}>
              <Icon color="has-custom-black" >
                <FaCrosshairs />
              </Icon>
              <p>Endereço</p>
            </Navbar.Item>
            <Navbar.Item onClick={() => props.showModal('ORDER_MODAL')}>
              <Icon color="has-custom-black" >
                <FaShoppingBasket />
              </Icon>
              <p>Sacola</p>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch);

export default connect(null, mapDispatchToProps)(Header);