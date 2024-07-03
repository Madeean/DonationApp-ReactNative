import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import style from './style.ts';
import {scaleFontSize} from '../../styles/scalling.ts';
import PropTypes from 'prop-types';

function Search(props) {
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25c0ff'}
        size={scaleFontSize(22)}
      />
      <TextInput
        placeholder={props.placeholder}
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
}

Search.default = {
  onSearch: () => {},
  placeholder: 'Search',
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
