import { Controller } from 'cerebral';
import Model from 'cerebral/models/immutable';
import SetStates from './modules/SetStates';
import { modules } from '../../src/controller';

const controller = Controller(Model({}));

controller.addModules({
  ...modules,
  // for debugging components
  set_states: SetStates(controller),
});

export default controller;
