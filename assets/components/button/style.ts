import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scalling.ts';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979f2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#FFF',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default style;
