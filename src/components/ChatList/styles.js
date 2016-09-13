export default {
  container: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    overflowY: 'none',
  },

  messages: {
    flexGrow: 1,
    // textAlign: 'center',
    // marginBottom: 10,
    // fontWeight: 'bold',
    // color: '#777',
    overflowY: 'auto',
    height: 0,

    // borderStyle: 'solid',
    // borderWidth: 2,
    borderTopColor: 'rgb(200, 200, 258)',
    borderTopStyle: 'solid',
    borderTopWidth: '2px',
    // borderRightColor: 'rgb(200, 200, 200)',
    // borderRightStyle: 'solid',
    // borderRightWidth: '2px',
    borderBottomColor: 'rgb(200, 200, 258)',
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
    // borderLeftColor: 'rgb(200, 200, 200)',
    // borderLeftStyle: 'solid',
    // borderLeftWidth: '2px',

    // borderColor: '#eee',
  },

  input: {
    overflowY: 'auto',
    textAlign: 'center',
    marginBottom: 34,
    fontWeight: 'bold',
    color: '#777',
  },

  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },


  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignIitems: 'stretch',
    marginTop: 10,
  },

  textareaContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  textarea: {
    boxSizing: 'border-box',
    // height: 23,
    // flexGrow: 1,
    // width: '100%',
    fontSize: 14,
    padding: 10,
  },
  textareaError: {
    flexGrow: 1,
    // height: 23,
    width: '100%',
    fontSize: 16,
    padding: 10,
    borderColor: 'red',
  },

  sendContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginLeft: 10,
    marginRight: 10,
  },

  button: {
    cursor: 'pointer',
    padding: 6,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#555',
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
  },
  current_item: {
    flexGrow: 1,
    color: '#999',
    fontSize: 12,
  },
  shortcuts: {
    color: '#999',
    fontSize: 12,
  },
};
