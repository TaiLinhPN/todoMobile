import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import color from './colors';

export const appWidth = Dimensions.get('window').width - 40;
const globalStyles = StyleSheet.create({
  app: {
    width: '100%',
    padding: 20,
    height: '100%',
    // backgroundColor: color.background,
  
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
  containerInput: {
    height: 43,
    borderColor: '#ADAFB0',
    borderRadius: 50,
    marginBottom: 24,
    overflow: 'hidden',
    backgroundColor: color.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.84,

    elevation: 6,
  },
});

export default globalStyles;
