import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from "react";
import Login from '../screens/Login/Login';
import Registration from '../screens/Regristation/Registration.tsx';
import Home from '../screens/Home/Home';
import DonationItemDetail from '../screens/SingleDonationItem/DonationItemDetail';
import { Routes } from './Routes';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const NonAuthenticated = () => {
  const user = useSelector((state) => state.user);

  if(user.isLoggedIn){
    return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.DonationItemDetail}
        component={DonationItemDetail}
      />
    </Stack.Navigator>
  );
  } else{
    return (
      <Stack.Navigator
        initialRouteName={Routes.Login}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Registration} component={Registration} />
      </Stack.Navigator>
    );
  }
};

export default NonAuthenticated;

// export const Authenticated: React.FC = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName={Routes.Home}
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name={Routes.Home} component={Home} />
//       <Stack.Screen
//         name={Routes.DonationItemDetail}
//         component={DonationItemDetail}
//       />
//     </Stack.Navigator>
//   );
// };
