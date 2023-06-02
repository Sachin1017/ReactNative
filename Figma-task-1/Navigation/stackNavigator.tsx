import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VisionCamera from '../visionCamera/camera';
import BotNavigator from './botNavigator';
import HomePage from '../homePage';
import Login from '../Login';
import SignUp from '../SignUp';
import Scanned from '../Tabs/scanned';
import CardsModalBox from '../Cards/cardsModalBox';
import EditCard from '../Cards/EditCards/editCard';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="BotNavigator"
        component={BotNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="VisionCamera"
        component={VisionCamera}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Scanned"
        component={Scanned}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="CardsModalBox"
        component={CardsModalBox}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="EditCard"
        component={EditCard}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
