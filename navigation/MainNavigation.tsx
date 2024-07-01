import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes.ts';
import Home from '../screens/Home/Home.tsx';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
