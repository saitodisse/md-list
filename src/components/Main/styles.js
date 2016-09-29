export default {
  mainContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    overflowY: 'hidden',
  },

  header: {
  },

  bodySection: {
    flex: '1 1 auto',
    overflowY: 'auto',
    minHeight: 0,
  },

  footer: {
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 9,
    marginBottom: 14,
  },
  title: {
  },
  titleLink: {
    fontSize: 22,
    color: '#777',
    marginLeft: 8,
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  topSeparator: {
    fontSize: 14,
    color: '#777',
    marginTop: 9,
    marginLeft: 10,
    cursor: 'pointer',
  },

  topLink: {
    fontSize: 14,
    color: '#777',
    marginTop: 9,
    marginLeft: 10,
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  reffsDiv: {
    marginTop: 7,
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

  loadingContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    overflow: 'hide',
    textAlign: 'center',
    marginTop: 30,
  },

  loadingStatus: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    fontSize: 15,
    marginLeft: '8%',
    marginRight: '8%',
    overflow: 'hide',
    textAlign: 'left',
    marginTop: 30,
  },

  loadingStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  loadingStatusLogType: {
    margin: '2px',
    border: '1px solid #6a969a',
    borderRadius: '6px',
    padding: '1px 4px',
  },
  loadingStatusLogMessage: {

  },
  loadingStatusLogTime: {

  },

};
