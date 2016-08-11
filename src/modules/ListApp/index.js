import changeNewItemTitle from './chains/changeNewItemTitle';
import submitNewItemTitle from './chains/submitNewItemTitle';

export default module => {
  module.addState({
    // items: {},

    /* -debug- */
    items: {
      'c82bd916-b97a-4141-8c8f-8779c610a517': {
        id: 'c82bd916-b97a-4141-8c8f-8779c610a517',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      '86574040-0b64-4c65-9648-f39508a5543b': {
        id: '86574040-0b64-4c65-9648-f39508a5543b',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      'cc4ab798-c8be-4acd-b1ae-a7ab48b098b8': {
        id: 'cc4ab798-c8be-4acd-b1ae-a7ab48b098b8',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      'fe04ba15-998e-4e18-a3e5-1c80124de9b5': {
        id: 'fe04ba15-998e-4e18-a3e5-1c80124de9b5',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      '5b93debf-659f-4dc2-bb67-f20f139533b1': {
        id: '5b93debf-659f-4dc2-bb67-f20f139533b1',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      'e9b3e142-5c28-4206-9e67-73b34bb4420f': {
        id: 'e9b3e142-5c28-4206-9e67-73b34bb4420f',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      '809f50ef-0ec9-4930-a6dd-decee0b98924': {
        id: '809f50ef-0ec9-4930-a6dd-decee0b98924',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      },
      '9b07482c-e675-4832-b659-867036030e12': {
        id: '9b07482c-e675-4832-b659-867036030e12',
        title: 'some long text, some long text, some long text, some long text, some long text, some long text, some long text, some long text, ',
        $isNew: false,
        $isSaved: true
      }
    },
    /* -debug- */

    newItemTitle: '',
    isSaving: false,
    error: null
  });

  module.addSignals({
    newItemTitleChanged: {
      chain: changeNewItemTitle,
      immediate: true
    },
    newItemTitleSubmitted: submitNewItemTitle
  });
};
