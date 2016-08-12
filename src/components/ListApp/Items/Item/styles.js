const valueStyle = {
  cursor: 'pointer',
  overflow: 'auto',
  marginTop: 5,
  marginBottom: 0,
  alignSelf: 'flex-start',
  marginLeft: 15,
  marginRight: 15,
  padding: 5,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#ddd',
  width: '100%',
  fontSize: 16,
};

export default {

  itemContainer: {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    border: '1px solid #E3E3E3',
    marginTop: 10,
  },


  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  id: {
    color: '#666',
    fontSize: 12,
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: 5,
  },
  removeButton: {
    alignSelf: 'flex-end',
    cursor: 'pointer',
    padding: 0,
    paddingLeft: 3,
    paddingRight: 3,
    fontSize: 12,
    color: '#a55',
  },


  valueContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  value: {
    ...valueStyle
  },

  valueSelected: {
    ...valueStyle,
    backgroundColor: '#dfd',
  },

  isNew: {
    textAlign: 'right',
    color: '#666',
    marginBottom: 3,
    marginRight: 4,
    fontSize: 12,
  },

};
