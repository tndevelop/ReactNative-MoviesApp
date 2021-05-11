import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    color: 'lightgreen',
    marginBottom: 15,
    marginLeft: 15,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  page: {
    backgroundColor: '#111',
    height: '100%'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
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
    marginLeft: 15,
    fontFamily: 'serif'
  },
  image: {
    width: '100%',
    aspectRatio: 10 / 10,
  }
});