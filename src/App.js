import './App.scss';

import { Container, Section } from 'rbx';
import React, { Fragment } from 'react';

import Header from './components/header';
import Routes from './routes';

const App = () => (
  <Fragment>
    <Header />
    <Section>
      <Container>
        <Routes />
      </Container>
    </Section>
  </Fragment>
)

export default App;