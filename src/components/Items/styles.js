export default {

  itemsContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap-reverse',
    alignItems: 'left',
    marginTop: 20,
    // justifyContent: 'space-around',
    justifyContent: 'flex-start',
    border: '1px solid #E3E3E3',
  },

  item: {
    flex: '0 1 auto',
    flexDirection: 'row',
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
    border: '1px solid #E3E3E3',
    margin: '10px 5px 10px 10px',
    width: 100,
    height: 100,
  },

  id: {
    // flex: '0 1 auto',
    position: 'absolute',
    border: '1px solid #E3E3E3',
    color: '#666',
    fontSize: 12,
  },

  value: {
    flex: '0 1 auto',
    textAlign: 'center',
    flexGrow: 2,
    marginTop: 40,
    alignSelf: 'center',
    // justifyContent: 'center',
    // border: '1px solid #E3E3E3',
    fontSize: 22,
  },

  isNew: {
    // flex: '0 1 auto',
    // position: 'absolute',
    // flexGrow: 0,
    // marginTop: 10,
    textAlign: 'right',
    // alignSelf: 'flex-end',
    // border: '1px solid #E3E3E3',
    color: '#666',
    marginTop: 16,
    marginRight: 4,
    fontSize: 12,
  },

};
