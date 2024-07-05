import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles.ts';
import Input from '../../assets/components/Input/Input.tsx';
import style from './style.ts';
import Header from '../../assets/components/header/Header.tsx';
import Button from '../../assets/components/button/Button.tsx';
import {Routes} from '../../navigation/Routes.ts';
import {loginUser} from '../../api/User.ts';
import {useDispatch} from 'react-redux';
import { login } from "../../redux/reducers/User.ts";

function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const dispatch = useDispatch();

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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyles.marginBottom24}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(login(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 3}
          />
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
