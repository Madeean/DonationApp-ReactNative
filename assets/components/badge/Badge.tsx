import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style.ts';
import React, {useRef, useState} from 'react';
import {horizontalScale} from '../../styles/scalling.ts';

function Badge(props) {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title]}>
        {props.title}
      </Text>
    </View>
  );

  // return (
  //   <View
  //     style={{
  //       backgroundColor: '#145855',
  //       paddingVertical: 18,
  //       paddingHorizontal: 10,
  //       justifyContent: 'center',
  //       borderRadius: horizontalScale(50),
  //       alignSelf: 'flex-start',
  //     }}>
  //     <Text
  //       style={{
  //         fontFamily: 'Inter',
  //         fontSize: scaleFontSize(10),
  //         fontWeight: '600',
  //         lineHeight: scaleFontSize(12),
  //         color: '#FFF',
  //       }}>
  //       Madee
  //     </Text>
  //   </View>
  // );
}

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Badge;
