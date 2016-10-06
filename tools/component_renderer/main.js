import React from 'react';
import {render} from 'react-dom';
import {Container} from 'cerebral-view-react';
import Main from './components/Main';
import controller from './controller';

require('!style!css!highlight.js/styles/github.css');
require('!style!css!highlight.js/styles/default.css');
require('!style!css!../../src/styles.css');

window.controller = controller;

render((
  <Container controller={controller} style={{height: '100%', overflowY: 'hidden'}} strict>
    <Main />
  </Container>
), document.querySelector('#app'));