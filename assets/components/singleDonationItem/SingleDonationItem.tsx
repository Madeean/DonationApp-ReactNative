import React from 'react';
import {Image, Pressable, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style.ts';
import Badge from '../badge/Badge.tsx';
import Header from '../header/Header.tsx';

function SingleDonationItem(props) {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode={'cover'}
          source={{uri: props.uri}}
          style={style.image}
        />
      </View>
      <View style={style.donationinformation}>
        <Header
          title={props.donationTitle}
          types={3}
          color={'#0a043c'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            types={3}
            color={'#156cf7'}
          />
        </View>
      </View>
    </Pressable>
  );
}

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  donationItemId: PropTypes.number.isRequired,
};

export default SingleDonationItem;
