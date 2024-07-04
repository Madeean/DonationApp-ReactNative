import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../styles/scalling.ts';

const style = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455a',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167, 167, 0.5)',
  },
});

export default style;
