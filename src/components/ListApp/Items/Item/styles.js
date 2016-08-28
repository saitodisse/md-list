const itemContainerStyle = {
  flexDirection: 'row',
  fontFamily: "'Roboto', sans-serif",
  border: '1px solid #E3E3E3',
  marginTop: 10,
};

const valueStyle = {
  flexShrink: 1,
  overflow: 'auto',

  padding: 3,
  marginLeft: 11,

  // borderStyle: 'solid',
  // borderWidth: 1,
  // borderColor: '#ddd',
  fontSize: 16,
};

const noSelect = {
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
};

export default {

  messageContainer: {
    flexDirection: 'row',
    fontFamily: "'Roboto', sans-serif",
    // border: '1px solid #E3E3E3',
    // marLeftginTop: 10,
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
    fontSize: 12,
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#777',
    ...noSelect,
  },
  deleteButton: {
    marginLeft: 10,
    fontSize: 12,
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#a77',
    ...noSelect,
  },

};
