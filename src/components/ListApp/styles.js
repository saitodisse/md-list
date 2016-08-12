export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 1,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    justifyContent: 'space-around',
    alignIitems: 'stretch',
    marginLeft: 50,
    marginRight: 50,
  },

  title: {
    textAlign: 'center',
    flexGrow: 1,
    marginBottom: 10,
    fontSize: 60,
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
    flexGrow: 1,
  },
  textarea: {
    width: '100%',
    fontSize: 16,
  },
  textareaError: {
    width: '100%',
    fontSize: 16,
    borderColor: 'red',
  },
  button: {
    cursor: 'pointer',
    marginLeft: 20,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },


  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },

  currentItem: {
    color: '#999',
    // textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
  },


  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
