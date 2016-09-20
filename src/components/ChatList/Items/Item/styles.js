const itemContainerStyle = {
  flexDirection: 'row',
  fontFamily: "'Roboto', sans-serif",
  // border: '1px solid #E3E3E3',
  marginTop: 3,
  marginLeft: 8,
};

const valueStyle = {
  flexShrink: 1,
  overflow: 'auto',

  padding: 3,
  marginLeft: 5,
  // fontSize: 14,
};

const noSelect = {
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
};

export default {

  messageContainer: {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    marginTop: 7,
    borderTop: '1px solid #e2e2e2',
    paddingTop: 4,
  },

  userPhotoContainer: {
    display: 'flex',
    flexGrow: 0,
    width: '2.25rem',
    justifyContent: 'center',
  },

  userPhoto: {
    height: '2.25rem',
    borderRadius: '.2rem',
    display: 'inline-block',
    position: 'relative',
  },

  bodyContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },

  topBodyContainer: {
    display: 'flex',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    flexGrow: 1,
  },

  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  dateTime: {
    fontSize: 12,
    marginLeft: 7,
    color: '#828282',
  },

  itemContainer: {
    ...itemContainerStyle,
  },

  itemNewContainer: {
    ...itemContainerStyle,
    backgroundColor: '#eff',
  },


  value: {
    ...valueStyle,
    backgroundColor: '#fff',
  },

  valueSelected: {
    ...valueStyle,
    backgroundColor: '#dfd',
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    // fontSize: 12,
    // cursor: 'pointer',
    // textDecoration: 'underline',
    // color: '#777',
    // ...noSelect,
  },
  deleteButton: {
    // marginLeft: 7,
    // fontSize: 12,
    // cursor: 'pointer',
    // textDecoration: 'underline',
    color: '#a77',
    // ...noSelect,
  },

};
