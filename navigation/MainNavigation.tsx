import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes.ts';
import Home from '../screens/Home/Home.tsx';
import DonationItemDetail from '../screens/SingleDonationItem/DonationItemDetail.tsx';
import React from "react";

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.DonationItemDetail}
        component={DonationItemDetail}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
