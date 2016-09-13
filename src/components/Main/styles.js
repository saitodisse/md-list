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
    flexDirection: 'column',
    // textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: 9,
    marginBottom: 9,
  },
  title: {
    flexGrow: 1,
    // fontWeight: 'bold',
    fontSize: 22,
    color: '#777',
    marginLeft: 8,
  },

  titleSourceLink: {
    fontWeight: 'normal',
    color: 'rgb(153, 208, 231)',
    fontSize: 11,
    textDecoration: 'underline',
    cursor: 'pointer',
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
    top: -13,
    right: -3,
  },

  button: {
    marginLeft: 10,
  },

  link: {
    position: 'relative',
    top: -3,
    marginLeft: 10,
    textDecoration: 'underline',
    color: 'cadetblue',
    cursor: 'pointer',
  },

};
