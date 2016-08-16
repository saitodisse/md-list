import Inferno from 'inferno';
import {render} from 'inferno-dom';
import {Container} from 'cerebral-view-inferno';
import controller from './controller';
import ListApp from './components/ListApp';

require('!style!css!highlight.js/styles/github.css');
require('!style!css!highlight.js/styles/default.css');
require('!style!css!./styles.css');

render((
  <Container controller={controller} style={{height: '100%'}}>
    <ListApp />
  </Container>
), document.querySelector('#app'));
