import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Container } from 'cerebral-view-react';
import controller from './controller';
import Main from './components/Main';

require('!style!css!highlight.js/styles/github.css');
require('!style!css!highlight.js/styles/default.css');
require('!style!css!./styles.css');

render((
  <Container controller={controller} style={{ height: '100%', overflowY: 'hidden' }} strict>
    <Main />
  </Container>
), document.querySelector('#app'));
