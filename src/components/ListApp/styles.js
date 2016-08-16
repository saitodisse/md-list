export default {
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    overflowY: 'none',
  },

  title: {
    textAlign: 'center',
    // marginBottom: 10,
    fontWeight: 'bold',
    color: '#777',
  },

  messages: {
    flexGrow: 1,
    // textAlign: 'center',
    // marginBottom: 10,
    // fontWeight: 'bold',
    // color: '#777',
    overflowY: 'auto',
    height: 0,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#eee',
  },

  input: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#777',
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignIitems: 'stretch',
  },

  textareaContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  textarea: {
    boxSizing: 'border-box',
    height: '100%',
    flexGrow: 1,
    width: '100%',
    fontSize: 16,
    padding: 10,
  },
  textareaError: {
    flexGrow: 1,
    width: '100%',
    fontSize: 16,
    padding: 10,
    borderColor: 'red',
  },
  button: {
    cursor: 'pointer',
    marginLeft: 20,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    alignSelf: 'flex-end',
  },


  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },


  bellowTextareaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemsCount: {
    flexGrow: 0,
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
  currentItem: {
    flexGrow: 1,
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
  shortcuts: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },


  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: "'Roboto', sans-serif",
    justifyContent: 'flex-end',
    alignIitems: 'flex-end',
    marginTop: 10,
  },

  actionsContainerButton: {
    cursor: 'pointer',
    marginLeft: 10,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#a55',
  },


};
