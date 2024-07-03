import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/scalling.ts';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: horizontalScale(155),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationinformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
