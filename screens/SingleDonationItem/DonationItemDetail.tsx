import {View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

function DonationItemDetail() {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(donationItemInformation);
  return <View />;
}

export default DonationItemDetail;
