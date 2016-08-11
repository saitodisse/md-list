import changeNewItemTitle from './chains/changeNewItemTitle'
import submitNewItemTitle from './chains/submitNewItemTitle'

export default module => {

  module.addState({
    items: {},
    // /* -debug- */
    // items: [{
    //   title: "1",
    //   $isNew: false,
    //   id: "1"
    //   },
    //   {
    //   title: "2",
    //   $isNew: false,
    //   id: "2"
    //   },
    //   {
    //   title: "3",
    //   $isNew: false,
    //   id: "3"
    //   },
    //   {
    //   title: "4",
    //   $isNew: false,
    //   id: "4"
    // }],
    // /* -debug- */
    newItemTitle: '',
    isSaving: false,
    error: null
  })

  module.addSignals({
    newItemTitleChanged: {
      chain: changeNewItemTitle,
      immediate: true
    },
    newItemTitleSubmitted: submitNewItemTitle
  })

}
