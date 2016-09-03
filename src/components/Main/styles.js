export default {
  mainContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    overflowY: 'none',
  },

  titleContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#777',
    // fontSize: 23,
  },

  bodyContainer: {
    flexGrow: 0,
    height: '100%',
    overflowY: 'none',
    justifyContent: 'center',
  },

  buttonsContainer: {
    display: 'flex',
    position: 'absolute',
    right: 21,
    top: 24,
    fontSize: 12,
  },

  userPhoto: {
    position: 'relative',
    height: 24,
    top: -19,
    right: -3,
  },

  button: {
    marginLeft: 10,
  },

  link: {
    position: 'relative',
    top: -9,
    marginLeft: 10,
    textDecoration: 'underline',
    color: 'cadetblue',
    cursor: 'pointer',
  },

};
