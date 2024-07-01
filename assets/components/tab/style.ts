import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scalling.ts';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979f2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  inactiveTab: {
    backgroundColor: '#f3f5f9',
  },
  inactiveTitle: {
    color: '#79869f',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    color: '#FFF',
    textAlign: 'center',
  },
});

export default style;
