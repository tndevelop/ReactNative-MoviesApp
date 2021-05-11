import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'green'
  },
  title: {
    fontSize: 22,
    color: 'lightgreen',
    marginBottom: 15,
    marginLeft: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: "100%"
  },
  column: {
    flex: 1,
    backgroundColor: '#111',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lightText: {
    fontSize: 18,
    color: 'lightblue',
    marginLeft: 10
  },
  flatList:{
    height: "100%"
  }
});