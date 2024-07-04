import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles.ts';
import Input from '../../assets/components/Input/Input.tsx';
import style from './style.ts';
import Header from '../../assets/components/header/Header.tsx';
import Button from '../../assets/components/button/Button.tsx';
import {Routes} from '../../navigation/Routes.ts';

function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.marginBottom24}>
          <Header title={'Welcome Back'} type s={1} />
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
        <View style={globalStyles.marginBottom24}>
          <Button title={'Login'} />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => {
            navigation.navigate(Routes.Registration);
          }}>
          <Header types={3} title={'Dont have an account?'} color={'#156cf7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
