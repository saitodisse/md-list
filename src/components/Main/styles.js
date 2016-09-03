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
    display: 'flex',
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
    fontSize: 23,
  },

  bodyContainer: {
    flexGrow: 0,
    display: 'flex',
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
    height: 30,
    top: -17,
    right: -3,
  },

  button: {
    marginLeft: 10,
  },

  link: {
    marginLeft: 10,
    textDecoration: 'underline',
    color: 'cadetblue',
    cursor: 'pointer',
  },

};
