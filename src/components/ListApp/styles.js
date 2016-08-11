export default {
  container: {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column',
    flexWrap: 1,
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    justifyContent: 'space-around',
    alignIitems: 'stretch',
  },

  header: {
    textAlign: 'center',
    flexGrow: 1,
    marginBottom: 10,
    fontSize: 60,
  },


  textContainer: {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 1,
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    justifyContent: 'space-around',
    alignIitems: 'stretch',
  },

  input: {
    width: 400,
    height: 60,
    fontSize: 16,
  },
  inputError: {
    width: 400,
    height: 60,
    fontSize: 16,
    borderColor: 'red',
  },
  button: {
    cursor: 'pointer',
    marginLeft: 20,
    padding: 10,
    fontSize: 14,
  },


  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },


};
