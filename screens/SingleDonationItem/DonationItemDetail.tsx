import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalStyles.ts';
import BackButton from '../../assets/components/BackButton/BackButton.tsx';
import style from './style.ts';
import Badge from '../../assets/components/badge/Badge.tsx';
import Header from '../../assets/components/header/Header.tsx';
import Button from '../../assets/components/button/Button.tsx';

function DonationItemDetail({navigation, route}) {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header title={donationItemInformation.name} types={1} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

export default DonationItemDetail;
