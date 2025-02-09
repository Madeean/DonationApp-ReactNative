import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import React from 'react';
import style from './style.ts';

function Header(props) {
  const styleToApply = () => {
    switch (props.types) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), props.color && {color: props.color}]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
        {props.title}
      </Text>
    </View>
  );
}

Header.default = {
  title: '',
  types: 1,
  color: '#000',
};

Header.propTypes = {
  title: PropTypes.string,
  types: PropTypes.number,
  color: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export default Header;
