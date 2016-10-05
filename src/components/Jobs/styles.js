export default {
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
    overflowY: 'auto',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px 25px',
  },

  jobNameLabel: {
    fontSize: 19,
    marginRight: 7,
  },

  jobNameInput: {
    flexGrow: 1,
  },

  searchButton: {
    flexGrow: 0,
    width: '49px',
    marginLeft: '20px',
    cursor: 'pointer',
    color: '#184c2e',
    border: '1px solid #3ba93e',
    backgroundColor: '#bdffbf',
    fontSize: '16px',
  },
};
