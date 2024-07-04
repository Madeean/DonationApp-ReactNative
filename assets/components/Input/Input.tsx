import React from 'react';
import {Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style.ts';

function Input(props) {
  const [value, setValue] = React.useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        placeholder={props.placeholder}
        style={style.input}
        value={value}
        onChangeText={value => {
          setValue(value);
          props.onChangeText(value);
        }}
      />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool.isRequired,
};

export default Input;
