import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scalling.ts';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
});

export default style;
