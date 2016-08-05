import Inferno from 'inferno'
import {render} from 'inferno-dom'
import {Container} from 'cerebral-view-inferno'

import controller from './controller'
import ListApp from './components/ListApp'


render((
  <Container controller={controller}>
    <ListApp />
  </Container>
), document.querySelector('#app'))
