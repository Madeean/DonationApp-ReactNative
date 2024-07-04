import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import style from './style.ts';
import React from "react";

function BackButton(props) {
  return (
    <Pressable onPress={props.onPress} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
