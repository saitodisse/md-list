export default {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },

  header: {
    flex: '0 1 auto',
    textAlign: 'center',
    marginBottom: 10,
  },

  input: {
    flex: '0 1 auto',
    fontFamily: 'monospace',
    border: '1px solid black',
    marginTop: 10,
  },
  inputError: {
    flex: '0 1 auto',
    fontFamily: 'monospace',
    border: '1px solid red',
  },

  error: {
    flex: '0 1 auto',
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },

  button: {
    cursor: 'pointer',
    flex: '0 1 auto',
    marginTop: 20,
    padding: 10,
    fontSize: 14,
  }

};
