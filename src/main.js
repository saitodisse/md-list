import Inferno from 'inferno';
import {render} from 'inferno-dom';
import {Container} from 'cerebral-view-inferno';
import controller from './controller';
import Main from './components/Main';

require('!style!css!highlight.js/styles/github.css');
require('!style!css!highlight.js/styles/default.css');
require('!style!css!./styles.css');

render((
  <Container controller={controller} style={{height: '100%'}}>
    <Main />
  </Container>
), document.querySelector('#app'));
