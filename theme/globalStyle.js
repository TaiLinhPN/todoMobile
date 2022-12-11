import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import color from './colors';

export const appWidth = Dimensions.get('window').width - 40;
const globalStyles = StyleSheet.create({
  app: {
    width:'100%',
    padding: 20,
    height: '100%',
    backgroundColor: color.white,
    
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
});

export default globalStyles;
