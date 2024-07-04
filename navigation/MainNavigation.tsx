import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes.ts';
import Home from '../screens/Home/Home.tsx';
import DonationItemDetail from '../screens/SingleDonationItem/DonationItemDetail.tsx';
import React from 'react';
import Login from '../screens/Login/Login.tsx';
import Registration from '../screens/Regristation/Registration.tsx';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.DonationItemDetail}
        component={DonationItemDetail}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
