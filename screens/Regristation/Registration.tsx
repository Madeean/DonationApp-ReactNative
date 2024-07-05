import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles.ts';
import Header from '../../assets/components/header/Header.tsx';
import Input from '../../assets/components/Input/Input.tsx';
import Button from '../../assets/components/button/Button.tsx';
import style from './style.ts';
import BackButton from '../../assets/components/BackButton/BackButton.tsx';
import {createUser} from '../../api/User.ts';

function Registration({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.marginBottom24}>
          <Header title={'Hello and Welcome !'} type s={1} />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            secureTextEntry={false}
            keyboardType="email-address"
            label={'First & Last Name'}
            placeholder={'Enter your full name'}
            onChangeText={(value: string) => {
              setFullName(value);
            }}
          />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            secureTextEntry={false}
            keyboardType="email-address"
            label={'Email'}
            placeholder={'Enter your email'}
            onChangeText={(value: string) => {
              setEmail(value);
            }}
          />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            secureTextEntry={true}
            keyboardType="password"
            label={'Password'}
            placeholder={'*****'}
            onChangeText={(value: string) => {
              setPassword(value);
            }}
          />
        </View>
        {error.length > 0 && (
          <Text style={style.error}>{error}</Text>
        )}
        {success.length > 0 && (
          <Text style={style.success}>{success}</Text>
        )}
        <View style={globalStyles.marginBottom24}>
          <Button
            isDisabled={fullName.length <= 2}
            title={'Register'}
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              if (user.error ?? '') {
                setError(user?.error ?? '');
              } else {
                setError('');
                setSuccess('You have successfully registered!');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Registration;
