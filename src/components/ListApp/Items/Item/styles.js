const itemContainerStyle = {
  flexDirection: 'row',
  fontFamily: "'Roboto', sans-serif",
  border: '1px solid #E3E3E3',
  marginTop: 10,
};

const valueStyle = {
  cursor: 'pointer',
  flexShrink: 1,
  overflow: 'auto',

  padding: 5,
  margin: 11,

  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#ddd',
  fontSize: 16,
};

export default {

  itemContainer: {
    ...itemContainerStyle,
  },

  itemNewContainer: {
    ...itemContainerStyle,
    backgroundColor: '#eff',
  },


  topContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  removeButton: {
    alignSelf: 'flex-end',
    cursor: 'pointer',
    padding: 0,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: 10,
    color: '#a55',
  },


  value: {
    ...valueStyle,
    backgroundColor: '#fff',
  },

  valueSelected: {
    ...valueStyle,
    backgroundColor: '#dfd',
  },

};
